const appConfig = require('../conf.app');

const conf = {
  automock: false,
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.js',
    '!**/breakpoints.js',
    '!**/data.js',
    '!**/polyfills.js',
  ],
  coverageDirectory: `${ appConfig.paths.ROOT }/.coverage`,
  coverageReporters: [
    'html',
    'json',
    'lcov',
    'text-summary',
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  moduleFileExtensions: [ 'js' ],
  moduleNameMapper: {},
  setupFiles: [
    `${ appConfig.paths.SRC }/polyfills.js`,
    `${ appConfig.paths.JEST }/shims.js`,
    `${ appConfig.paths.JEST }/bootstrap.js`,
  ],
  rootDir: appConfig.paths.ROOT,
  roots: ['src'],
  testEnvironment: 'node',
  testURL: 'http://localhost',
  timers: 'fake',
  transform: {
    '^.+\\.(js)$': `${ appConfig.paths.ROOT }/node_modules/babel-jest`,
    '^.+\\.css$': `${ appConfig.paths.JEST }/cssTransform.js`,
    '^(?!.*\\.(js|css|json)$)': `${ appConfig.paths.JEST }/fileTransform.js`,
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(jsx?)$',
  ],
};

// map Webpack alias' so files resolve
Object.keys(appConfig.webpack.aliases).forEach((alias) => {
  conf.moduleNameMapper[`^${ alias }(.*)$`] = `${ appConfig.webpack.aliases[alias] }/$1`;
});

module.exports = conf;
