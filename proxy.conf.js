const PROXY_CONFIG = [
    {
      context: ['/tce-auth-api', '/tce-teach-api', '/tce-repo-api', '/tce-usage-api', '/tce-school-api', '/tce-grant-api'],
      // target: 'http://172.18.1.57:80',
      // target: 'http://172.18.1.56',
      // target: 'http://13.235.51.234',
      //super admin
      target: 'http://65.0.80.252',
      secure: false,
      onProxyRes: function(proxyRes, req, res) {
        proxyRes.headers['www-authenticate'] = 'none';
      }
    }
  ];
  
  module.exports = PROXY_CONFIG;