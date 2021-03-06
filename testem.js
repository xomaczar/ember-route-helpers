module.exports = {
	framework: 'qunit',
	test_page: 'tests/index.html?hidepassed',
	disable_watching: true,
	browser_start_timeout: 180,
	launch_in_ci: [
		'Chrome'
	],
	launch_in_dev: [
		'Chrome'
	],
	browser_args: {
		Chrome: [
			'--headless',
			'--disable-gpu',
			'--remote-debugging-port=9222',
			'--window-size=1440,900'
		]
	}
};
