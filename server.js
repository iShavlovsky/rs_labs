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

    // eslint-disable-next-line no-unused-vars
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
            baseUrl,
            status
        } = stores.seo;
        let url;

        if (baseUrl.value === 'server') {
            const { protocol } = req;
            const { hostname } = req;
            url = `${protocol}://${hostname}:3000/`;
        }

        if (status.value !== 200) {
            resp.status(status.value);
        }

        let page = template.replace('<!--ssr-->', html)
            .replace(/(<title>).+(<\/title>)/, `<title>${title.value}</title>`)
            .replace(/(<meta name="description" content=").+(">)/, `$1${description.value}$2`)
            .replace(/(<meta name="keywords" content=").+(">)/, `$1${keywords.value}$2`)
            .replace(/(<meta name="robots" content=").+(">)/, `$1${robots.value}$2`)
            .replace(/(<meta name="author" content=").+(">)/, `$1${author.value}$2`)
            .replace(/(<meta property="og:image" content=").+(">)/, `$1${ogImage.value}$2`)
            .replace(/(<meta property="og:type" content=").+(">)/, `$1${ogType.value}$2`)
            .replace(/(<meta property="og:site_name" content=").+(">)/, `$1${siteName.value}$2`)
            .replace(/(<link rel="canonical" href=").+(">)/, `$1${url}$2`);
        resp.end(page);
    });
});
server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

