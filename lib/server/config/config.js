const config = {
  production: {
    env: 'production',
    port: process.env.PORT || 80,
    logging: false,
    DB_USER: 'root',
    DB_PASS: '159753123',
    DB_HOST: 'ds239309.mlab.com',
    DB_PORT: '39309',
    DB_NAME: 'inctracker'
  },
  development: {
    env: 'development',
    port: process.env.PORT || 8080,
    logging: true,
    DB_USER: 'root',
    DB_PASS: '159753123',
    DB_HOST: 'ds239309.mlab.com',
    DB_PORT: '39309',
    DB_NAME: 'inctracker'
  }
};

module.exports = config[process.env.NODE_ENV || 'development'];