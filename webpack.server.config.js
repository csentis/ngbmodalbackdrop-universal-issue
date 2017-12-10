/**
 * @License: No License. This software is unlicensed.
 * @Copyright: Copyright (c) 2017 capaplan UG (haftungsbeschränkt)
 * @Author: Christian Sentis
 * @Date: 2017-11-01 03:18:33
 * @Last Modified by: Christian Sentis
 * @Last Modified time: 2017-11-02 22:35:16
 */


const path = require('path');
const webpack = require('webpack');

module.exports = {
    // Express server for Dynamic universal
    entry: { server: './server.ts' },
    // This is an example of Static prerendering (generative)
    // prerender: './prerender.ts',
    resolve: { extensions: ['.js', '.ts'] },
    target: 'node',
    // include node_modules and other 3rd party libraries
    externals: [/(node_modules|main\..*\.js)/],
    output: {
        // puts output to the root of the dist folder
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader?{ configFile: "src/tsconfig.server.json" }'
            }
        ]
    },
    plugins: [
        // Temporary Fix for issue: https://github.com/angular/angular/issues/11580
        // for "WARNING Critical dependency: the request of a dependency is an expression"
        new webpack.ContextReplacementPlugin(
            /(.+)?angular(\\|\/)core(.+)?/,
            path.join(__dirname, 'src'), // location of your src
            {} // a map of your routes
        ),
        // Temporary Fix for issue: https://github.com/angular/angular/issues/11580
        // for "WARNING Critical dependency: the request of a dependency is an expression"
        new webpack.ContextReplacementPlugin(
            /(.+)?express(\\|\/)(.+)?/,
            path.join(__dirname, 'src'),
            {}
        )
    ]
}
