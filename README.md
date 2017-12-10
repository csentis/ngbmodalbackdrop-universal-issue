# README

This repo is a (not so) minimal reproduction of an error with NgbModal logged when trying to access a universal-compiled app with:

## Error Message

`Error: No component factory found for NgbModalBackdrop. Did you add it to @NgModule.entryComponents?`

## Environment

```shell
Angular CLI: 1.6.0
Node: 8.9.1
OS: win32 x64
Angular: 5.1.0
... animations, common, compiler, compiler-cli, core, forms
... http, language-service, platform-browser
... platform-browser-dynamic, platform-server, router
... service-worker

@angular/cli: 1.6.0
@angular-devkit/build-optimizer: 0.0.35
@angular-devkit/core: 0.0.22
@angular-devkit/schematics: 0.0.41
@ngtools/json-schema: 1.1.0
@ngtools/webpack: 1.9.0
@schematics/angular: 0.1.10
@schematics/schematics: 0.0.10
typescript: 2.5.3
webpack: 3.10.0
``` 

## Reproduction Steps

1.  clone this repo: ``
1.  run `npm install --no-progress`
1.  run `npm run universal`
1.  once the last step has finished, open your browser and navigate to [localhost:4000](http://localhost:4000) 