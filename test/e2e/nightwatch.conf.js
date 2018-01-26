require('babel-register');

// http://nightwatchjs.org/gettingstarted#settings-file
module.exports = {
  src_folders: ['test/e2e/specs'],
  output_folder: 'test/e2e/reports',
  custom_assertions_path: '',
  page_objects_path : '',
  globals_path : '',

  selenium: {
    start_process: true,
    server_path: require('selenium-server').path,
    log_path : '',
    port: 4444,
    cli_args: {
      'webdriver.chrome.driver': require('chromedriver').path,
      'webdriver.gecko.driver' : '',
      'webdriver.edge.driver' : ''
    }
  },

  test_settings: {
    default: {
      launch_url : 'http://localhost',
      selenium_port: 4444,
      selenium_host: 'localhost',
      silent: true,
      screenshots : {
        enabled : false,
        path : ''
      }
    },

    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true
      }
    },

    firefox: {
      desiredCapabilities: {
        browserName: 'firefox',
        javascriptEnabled: true,
        acceptSslCerts: true
      }
    }
  }
}
