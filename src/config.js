module.exports = {
  development: {
    isProduction: false,
    port: 3000,
    app: {
      name: '社運測測看'
    }
  },
  production: {
    isProduction: true,
    port: process.env.PORT,
    app: {
      name: '社運測測看'
    }
  }
}[process.env.NODE_ENV || 'development'];
