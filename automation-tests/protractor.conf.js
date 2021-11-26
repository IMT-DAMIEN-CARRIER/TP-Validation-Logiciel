/**
 * Author: TMO 2021-11-20
 */
var globalConf = {
    SELENIUM_PROMISE_MANAGER: false,
    framework: "mocha", // framework utilisé couplé avec la librairie chai-as-promised
    seleniumAddress: 'http://' + (process.env.SELENIUM_HOST || 'localhost') + ':4444/wd/hub',
    ignoreUncaughtExceptions: true,
    params: {
        mode: 'local'
    }
    ,
    onPrepare:
        function () {
            browser.getCapabilities().then(function (cap) {
                browser.browserName = cap.get('browserName');
				browser.browserVersion = cap.get('version');
				browser.browserPlatform = cap.get('platform');
            });
        },
    capabilities: {},
    localSeleniumStandaloneOpts: {
        jvmArgs: ["-Dwebdriver.ie.driver=node_modules/webdriver-manager/selenium/IEDriverServer3.150.0.exe"]
    },
    suites: {},
    mochaOpts: {
        timeout: 600000,
        reporter: 'mochawesome-screenshots',
        reporterOptions: {
            autoOpen: true,
            reportPageTitle: 'Protractor Tests Results',
            reportDir: 'protractorTestsResults',
            slow: 3000,
            takePassedScreenshot: true,
            clearOldScreenshots: true,
            jsonReport: false,
            multiReport: true
        },
    }
};
module.exports = globalConf;