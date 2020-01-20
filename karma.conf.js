/* eslint-disable */
const path = require('path');

module.exports = function karma(config) {
    config.set({
        frameworks: [
            'karma-typescript',
            'mocha',
            'chai',
        ],
        files: [
            { pattern: 'src/**/*.ts', include: true },
            { pattern: 'tests/**/*.ts', include: true },
        ],
        preprocessors: {
            '**/*.ts': 'karma-typescript',
        },
        plugins: [
            'karma-typescript',
            'karma-chrome-launcher',
            'karma-mocha',
            'karma-chai',
            'karma-coverage-istanbul-reporter',
            'karma-spec-reporter',
        ],
        reporters: [
            'spec',
            'coverage-istanbul',
            'karma-typescript',
        ],
        coverageIstanbulReporter: {
            reports: ['text-summary'],
            dir: path.join(__dirname, 'coverage'),
        },
        karmaTypescriptConfig: {
            compilerOptions: {
                target: 'es6',
            },
            exclude: [
                'node_modules',
                '*spec.ts',
            ],
            coverageOptions: {
                exclude: [
                    /spec\.ts$/,
                ],
            },
        },
        browsers: [
            'ChromeHeadless',
        ],
        // possible values: config.LOG_DISABLE || config.LOG_ERROR ||
        // config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,
        singleRun: true,
        });
  };
