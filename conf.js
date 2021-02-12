exports.config = {
	profile: 'integration',

  	baseUrl: 'http://localhost:8080/index.html',
	connectionConfigs: {
		direct: {
			binaries: {
				chromedriver: {
					version: "74.0.3729.6"
				}
			}
		}
	},
	browsers: [{
	browserName: 'chrome',
	capabilities: {
		remoteWebDriverOptions: {
		maximized: false,
		browserSize: {
			width: 1920,
			height: 1067
		}
		}
	}
	}]
};
