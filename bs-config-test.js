
/*
 |--------------------------------------------------------------------------
 | Browser-sync config file
 |--------------------------------------------------------------------------
 |
 | For up-to-date information about the options:
 |   http://www.browsersync.io/docs/options/
 |
 */

module.exports = {
    "files": '**,!jspm_packages/**,!node_modules/**',
    "watchOptions": {
        usePolling: true
    },
    "server": true,
    "browser": (process.platform == 'linux')? 'chromium-browser' : 'google chrome',
    "startPath": 'test.html'
};
