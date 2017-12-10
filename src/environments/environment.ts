/**
 * @License: No License. This software is unlicensed.
 * @Copyright: Copyright (c) 2017 capaplan UG (haftungsbeschränkt)
 * @Author: Christian Sentis
 * @Date: 2017-10-30 00:19:37
 * @Last Modified by: Christian Sentis
 * @Last Modified time: 2017-12-09 03:04:53
 */


/**
 * Declares and exports constant `environment`'s element `production` to `true`. Used as standard in all (but the prod environment): dev, ci.
 *
 * The file contents for the current environment will overwrite these during build. The build system defaults to the dev environment which uses `environment.ts`, but if you do `ng build --env=prod` then `environment.prod.ts` will be used instead.
 * The list of which env maps to which file can be found in `.angular-cli.json`.
 */
export const environment = {
    production: false
};

// TODO: integration? isDevMode?
