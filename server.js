import createApp from './dist-ssr/entry-server.js';
import { renderToString } from 'vue/server-renderer';
import express from 'express';
import { readFileSync } from 'fs';
// import proxy from 'express-http-proxy';
import compression from 'compression';

const template = readFileSync('./dist/index.html').toString('utf-8');
const server = express();
const port = 3000;

// server.use('/api', proxy('https://api.deployteam.ru/', {
//     proxyReqPathResolver(req) {
//         return '/api' + req.url;
//     }
// }));
server.use(compression({
    level: 5,
    threshold: 0,
    algorithms: ['gzip', 'deflate']
}));

server.use('/assets', express.static('./dist/assets'));
server.use('/favicon.ico', express.static('./dist/favicon.ico'));
server.use('/sitemap.xml', express.static('./dist/sitemap.xml'));
server.use('/robots.txt', express.static('./dist/robots.txt'));


server.use((req, res, next) => {
    console.log('Middleware executed!');
    next();
});
server.get('*', async function (req, resp) {
    resp.setHeader('Content-Security-Policy', 'default-src \'self\'; font-src \'self\' data:;');

    const { app, stores } = await createApp({ url: req.url });
    const html = await renderToString(app);
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

    if (baseUrl !== '') {
        url = baseUrl;
    } else {
        const { protocol } = req;
        const { hostname } = req;
        url = `${protocol}://${hostname}:3000/`;
    }
    console.log(title);
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
        { meta: '<meta content="', content: siteName, end: '" name="generator">' },
        { meta: '<meta content="', content: ogImage, end: '" property="og:image">' },
        { meta: '<meta content="', content: ogType, end: '" property="og:type">' },
        { meta: '<meta content="', content: siteName, end: '" property="og:site_name">' },
        { meta: '<link href="', content: url, end: '" rel="canonical"/>' },
        { meta: '<link href="', content: url, end: '" rel="preconnect"/>' }
    ];

    for (const { meta, content, end } of replacements) {
        const regex = new RegExp(`(${meta}).+(${end})`);
        page = page.replace(regex, `$1${content}$2`);
    }

    resp.end(page);


});
server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

