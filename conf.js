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
		browserName: "chromeHeadless"
	}]
};
