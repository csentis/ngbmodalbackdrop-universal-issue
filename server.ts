/**
 * @License: No License. This software is unlicensed.
 * @Copyright: Copyright (c) 2017 capaplan UG (haftungsbeschränkt)
 * @Author: Christian Sentis
 * @Date: 2017-11-01 03:17:24
 * @Last Modified by: Christian Sentis
 * @Last Modified time: 2017-11-12 02:19:09
 */


// Important polyfills - needed before anything else
import 'zone.js/dist/zone-node';
import 'reflect-metadata';
// Angular
import { renderModuleFactory } from '@angular/platform-server';
import { enableProdMode } from '@angular/core';
// 3rd party
import 'rxjs/Rx';
import * as express from 'express';
import * as compression from 'compression';
import { ngExpressEngine } from '@nguniversal/express-engine';
import { join } from 'path';
import { readFileSync } from 'fs';


enableProdMode(); // Faster server renders w/ Prod mode (dev mode never needed)
const app = express(); // Express server
// app.use(compression()); // enable compression; 2017-11-09: to be activated in reverse proxy

const DIST_FOLDER = join(process.cwd(), 'dist');

// Our index.html we'll use as our template
const template = readFileSync(join(DIST_FOLDER, 'browser', 'index.html')).toString();

const { provideModuleMap } = require('@nguniversal/module-map-ngfactory-loader');
// * NOTE :: leave this as require() since this file is built dynamically from webpack
const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./dist/server/main.bundle');

// Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
app.engine('html', ngExpressEngine({
    bootstrap: AppServerModuleNgFactory,
    providers: [
        provideModuleMap(LAZY_MODULE_MAP)
    ]
}));

// or, for complete flexibility, a solution w/o `ngExpressEngine`
// app.engine('html', (_, options, callback) => {
//     renderModuleFactory(AppServerModuleNgFactory, {
//         // Our index.html
//         document: template,
//         url: options.req.url,
//         // DI so that we can get lazy-loading to work differently (since we need it to just instantly render it)
//         extraProviders: [
//             provideModuleMap(LAZY_MODULE_MAP)
//         ]
//     }).then(html => {
//         callback(null, html);
//     });
// });

app.set('view engine', 'html');
app.set('views', join(DIST_FOLDER, 'browser'));

/* - Example Express Rest API endpoints -
  app.get('/api/**', (req, res) => { });
*/

// Server static files from /browser
app.get('*.*', express.static(join(DIST_FOLDER, 'browser'), { maxAge: '1y' }));

// All regular routes use the Universal engine
app.get('*', (req, res) => {
    res.render(join(DIST_FOLDER, 'browser', 'index.html'), {
        req,
        res
    });
}
    // , (err: Error, html: string) => {
    // res.status(html ? 200 : 500).send(html || err.message);
    // }
);
// app.get('*', (req, res) => {
//     res.render('index', { req });
// });

const PORT = process.env.PORT || 4000;
const HOST = process.env.BASE_URL || 'localhost';
const baseUrl = `http://${HOST}:${PORT}`;

// Start up the Express server
app.listen(PORT, () => {
    console.log(`Express server listening on ${baseUrl}`);
});
