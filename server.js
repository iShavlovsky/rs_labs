import createApp from './dist-ssr/entry-server.js';
import { renderToString } from 'vue/server-renderer';
import express from 'express';
import { readFileSync } from 'fs';
// import proxy from 'express-http-proxy';
import compression from 'compression';

const template = readFileSync('./dist/index.html').toString();
const server = express();
const port = 3000;

// server.use('/api', proxy('https://api.deployteam.ru/', {
//     proxyReqPathResolver(req) {
//         return '/api' + req.url;
//     }
// }));

server.use('/assets', express.static('./dist/assets'));
server.use('/favicon.ico', express.static('./dist/favicon.ico'));
server.use('/sitemap.xml', express.static('./dist/sitemap.xml'));
server.use('/robots.txt', express.static('./dist/robots.txt'));

server.use(compression());

server.use((req, res, next) => {
    console.log('Middleware executed!');
    next();
});
server.get('*', async function (req, resp) {
    // resp.setHeader(
    // 	'Content-Security-Policy',
    // 	"default-src 'none'; script-src 'self'; connect-src 'self' https://api.deployteam.ru; img-src * 'self' data: https:; style-src 'self' https://api.deployteam.ru 'unsafe-inline'; base-uri 'self'; form-action 'self'; font-src 'self' https://fonts.googleapis.com"
    // );


    const { app, stores } = await createApp({ url: req.url });
    renderToString(app).then(html => {

        const {
            title,
            description,
            keywords,
            author,
            robots,
            ogType,
            siteName,
            ogImage,
            baseUrl
        } = stores.seo.seoState.value;
        let url;

        if (baseUrl === '') {
            const { protocol } = req;
            const { hostname } = req;
            url = `${protocol}://${hostname}:3000/`;
        } else {
            url = baseUrl;
        }

        if (stores.seo.status.value !== 200) {
            resp.status(stores.seo.status.value);
        }

        let page = template.replace('<!--ssr-->', html);
        const replacements = [
            { meta: '<title>', content: title, end: '</title>' },
            { meta: '<meta content="', content: description, end: '" name="description">' },
            { meta: '<meta content="', content: keywords, end: '" name="keywords">' },
            { meta: '<meta content="', content: robots, end: '" name="robots">' },
            { meta: '<meta content="', content: author, end: '" name="author">' },
            { meta: '<meta content="', content: ogImage, end: '" property="og:image">' },
            { meta: '<meta content="', content: ogType, end: '" property="og:type">' },
            { meta: '<meta content="', content: siteName, end: '" property="og:site_name">' },
            { meta: '<link href="', content: url, end: '" rel="canonical">' }
        ];

        for (const { meta, content, end } of replacements) {
            const regex = new RegExp(`(${meta}).+(${end})`);
            page = page.replace(regex, `$1${content}$2`);
        }

        resp.end(page);

    });
});
server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

