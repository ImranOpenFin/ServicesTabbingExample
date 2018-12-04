const {launch, connect} = require('hadouken-js-adapter');
const express = require('express');
const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

(async () => {
    const app = express();
    app.use(express.static('.'));
    app.use(await createWebpackMiddleware());

    app.listen(8085, () => {
        launch({
            manifestUrl: 'http://localhost:8085/app/app.json'
        });
    });
})();

async function createWebpackMiddleware() {
    return new Promise((resolve) => {
        // Create express middleware
        const compiler = webpack(require('./webpack.config.js'));
        const middleware = webpackDevMiddleware(compiler, {publicPath: '/', writeToDisk: true});

        // Wait until initial build has finished before starting application
        middleware.waitUntilValid((result) => {
            // Output build times
            console.log('Initial build complete');

            // Check build status
            if (result.stats.find(stats => stats.compilation.errors.length > 0)) {
                console.error('Build failed. See output above.');
                process.exit(1);
            } else {
                resolve(middleware);
            }
        });
    });
}
