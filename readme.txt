-- Express Used as a server instead of LiveServer, WebPack Server and etc.
-- EditorConfig 
-- using nsp for securing npm
-- ngrok for sharing your local work instead of localtunnel
-- Using npm Scripts instead of gulp and grunt [make sure to install and configure ngrok and change the path in the package.json to your ngrok path]
-- npm run command -s to run in silent mode
-- use babel over typescript to support ES6
-- use webpack as a bundler instead of browserify 
-- we can use webpack with browsers or backend node apps and to bundle js, css, html, images and etc.
-- over the 5 js module formats (IIFE, AMD, commonjs, UMD, ES6 modules) we will use ES6 modules and for ES5 we can use commonjs which is the default pattern for node
-- we use eslint over jslint and jshint for lintting but it didn't yet support typescript so for typescript use tslint untill eslint supporting typescript
-- we will not use babel-eslint to support 0-4 stage features we will use only the standard es6, es7 features
-- eslint dose not support watching by default so we have 2 options 1 with webpack plugin called eslint-loader and the other that we will use is a npm package called eslint-watch which more mature and didn't need webpack to use it.
-- in package.json we give the esw which is the linting watch excutable all the file and folders we want to watch
-- make sure to remove or disable any eslint editor integration before using it to not make conflicts.
-- with eslint we can disable specific role on a specific line or specific file


