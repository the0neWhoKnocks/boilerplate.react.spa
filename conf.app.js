const path = require('path');
const url = require('url');

const ROOT = path.resolve(__dirname);
const SRC = path.resolve(ROOT, 'src');
const PUBLIC_URL = process.env.PUBLIC_URL;

function ensureSlash(path) {
  const hasSlash = path.endsWith('/');

  return ( !hasSlash ) ? `${path}/` : path;
}

function getPublicUrl(appPackageJson){
  return PUBLIC_URL || require(appPackageJson).homepage;
}

// We use `PUBLIC_URL` environment variable or "homepage" field to infer
// "public path" at which the app is served.
// Webpack needs to know it to put the right <script> hrefs into HTML even in
// single-page apps that may serve index.html for nested URLs like /todos/42.
// We can't use a relative path in HTML because we don't want to load something
// like /todos/42/static/js/bundle.7289d.js. We have to know the root.
function getServedPath(appPackageJson) {
  const publicUrl = getPublicUrl(appPackageJson);
  const servedUrl = (publicUrl) ? url.parse(publicUrl).pathname : '/';
  return ensureSlash(servedUrl, true);
}

module.exports = {
  paths: {
    appHtml: path.resolve(ROOT, 'src/assets/index.html'),
    appIndexJs: path.resolve(ROOT, 'src/index.js'),
    appNodeModules: path.resolve(ROOT, 'node_modules'),
    appPackageJson: path.resolve(ROOT, 'package.json'),
    ASSETS: path.resolve(ROOT, 'src/assets'),
    JEST: path.resolve(ROOT, '.jest'),
    PUBLIC: path.resolve(ROOT, 'public'),
    publicUrl: getPublicUrl(path.resolve(ROOT, 'package.json')),
    ROOT,
    SRC,
    servedPath: getServedPath(path.resolve(ROOT, 'package.json')),
    yarnLockFile: path.resolve(ROOT, 'yarn.lock'),
  },
  PORT: 3001,
  webpack: {
    paths: {
      COMPONENTS: path.resolve(ROOT, 'src/components'),
      ROOT,
      SRC,
    }
  }
};
