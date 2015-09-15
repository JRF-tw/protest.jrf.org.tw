module.exports = {
  development: {
    isProduction: false,
    port: 3000,
    app: {
      name: '社運測測看'
    },
    gtmId: ''
  },
  production: {
    isProduction: true,
    port: process.env.PORT,
    app: {
      name: '社運測測看'
    },
    gtmId: 'GTM-TVR9Z5'
  }
}[process.env.NODE_ENV || 'development'];
