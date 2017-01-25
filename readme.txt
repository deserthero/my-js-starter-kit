Editor and it's config
-- use EditorConfig from editorconfig.org
Package managers:
-- use npm over the other options
-- using nsp for securing npm
- Servers and sharing your work to client:
-- Express Used as a server instead of LiveServer, WebPack Server and etc.
-- ngrok for sharing your local work instead of localtunnel and others
Automation:
-- using npm Scripts instead of gulp and grunt [make sure to install and configure ngrok and change the path in the package.json to your ngrok path]
-- npm run command -s to run in silent mode
- Transpiling:
-- use babel over typescript to support ES6
-- we can use webpack with browsers or backend node apps and to bundle js, css, html, images and etc.
-- over the 5 js module formats (IIFE, AMD, commonjs, UMD, ES6 modules) we will use ES6 modules and for ES5 we can use commonjs which is the default pattern for node
-- use babel-node in your scipts in package.json instead of node to transpile files
Bundling:
-- use webpack as a bundler instead of browserify.
-- Linting:
-- we use eslint over jslint and jshint for lintting but it didn't yet support typescript so for typescript use tslint untill eslint supporting typescript
-- we will not use babel-eslint to support 0-4 stage features we will use only the standard es6, es7 features
-- eslint dose not support watching by default so we have 2 options 1 with webpack plugin called eslint-loader and the other that we will use is a npm package called eslint-watch which more mature and didn't need webpack to use it.
-- in package.json we give the esw which is the linting watch excutable all the file and folders we want to watch
-- make sure to remove or disable any eslint editor integration before using it to not make conflicts.
-- with eslint we can disable specific role on a specific line or specific file
Testing:
-- for testing there are 3 main types: unit test which allow us to test single fn or module, integration test which allow us test interactions between modules, and UI test which automate interaction with UI. UI test and integration tests may need simulate actions with tools like selenium.
-- We have alot of testing frameworks: mocha,jasmine,qunit,tape,ava,jest(facebook) we will use mocha but all frameworks are good to choose any.
-- Assertion libraris: jasmine and jest have there built in ones, and we will use chai library for assertion with mocha framework instead of expect library and should.js library but also use what you love.
-- Helper libraries: we will use JSDOM which allow us to run dom-related tests without browsers so we can simulate browsers DOM without browsers. We will use Cheerio (JQuery for servers) to Query virtual DOM (from JSDOM) using JQuery selectors.
-- Where to run tests: 1- Browsers (Karma,Testem) 2- Headless browsers also known as hidden browsers (phantomJs) 3- In-Memory DOM (JSDOM) (will use this because it's the lighter weight without alot of config)
-- Where to put test files: alongside with js files not centralized in test folder to be more easy to see and work with
-- naming conv: jsfile.spec.js  or jsfile.test.js (we will use that)
-- When to run tests: unit tests should runs every time i hit save
-- use continous integration servers which catching mistkes quickly.
-- CI servers made auto build, run tests, check code coverage, if you want it can auto deploy your buld to production.
-- CI server: Travis (linux, mac), Appveyor (windows), jenkins, CircleCI, Semaphore, SnapCI
-- I will use Travis and Appveyor to cover linux, mac and windows scenarios.
Http calls:
-- Http calls approches:
  1- Node: http, request which is a high level abstraction of request.
  2- Browser: XmlHttpRequest, JQuery, Framework based (angular or react apis), Fetch
  3- Node and Browser: isomorphic-fetch, xhr, SuperAgent, Axios
  4- if you work only backend choose request and if you work only frontend choose fetch or based on your framework and if your app work in both choose one of those (isomorphic-fetch, xhr, SuperAgent, Axios)
  -- To be continue later (mocks, polyfilling and etc.)
Project structure:
- use feature oriented instead of mvc style
- use pojos to encapsulate logic
- Never ever use js inside html js relate to js files only.
Production build:






