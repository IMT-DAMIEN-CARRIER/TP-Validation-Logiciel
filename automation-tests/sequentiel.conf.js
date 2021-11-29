var globalConf = require('./protractor.conf.js');

var scriptConf = JSON.parse(JSON.stringify(globalConf));

scriptConf['capabilities'].shardTestFiles = true;
scriptConf['capabilities'].maxInstances = 1;
scriptConf['capabilities'].browserName = 'chrome';
scriptConf['capabilities'].unexpectedAlertBehaviour = 'accept';

scriptConf['capabilities']['goog:chromeOptions'] = {
    'args': [/*"--headless",*/ "--window-size=1920,1080", 'disable-infobars', '--no-sandbox'],
    w3c: false
}

scriptConf['suites'] = {
    Wikipedia: 'scripts/testsSuites/Wikipedia/searchWord.Spec.js',
    ImpotsGouv: 'scripts/testsSuites/ImpotsGouv/gouv.Spec.js',
};

exports.config = scriptConf;