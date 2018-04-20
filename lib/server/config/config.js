const config = {
  production: {
    env: 'production',
    port: process.env.PORT || 80,
    logging: false,
    DB_USER: process.env.DB_USER,
    DB_PASS: process.env.DB_PASS,
    DB_HOST: process.env.DB_HOST,
    DB_PORT: process.env.DB_PORT,
    DB_NAME: process.env.DB_NAME
  },
  development: {
    env: 'development',
    port: process.env.PORT || 8080,
    logging: true,
    DB_USER: process.env.DB_USER || 'root',
    DB_PASS: process.env.DB_PASS || '159753123',
    DB_HOST: process.env.DB_HOST || 'ds239309.mlab.com',
    DB_PORT: process.env.DB_PORT || '39309',
    DB_NAME: process.env.DB_NAME || 'inctracker'
  },
  test: {
    env: 'test',
    port: process.env.PORT || 8080,
    logging: true,
    DB_USER: process.env.DB_USER || 'root',
    DB_PASS: process.env.DB_PASS || '159753123',
    DB_HOST: process.env.DB_HOST || 'ds239309.mlab.com',
    DB_PORT: process.env.DB_PORT || '39309',
    DB_NAME: process.env.DB_NAME || 'inctracker_test'
  },
};

module.exports = config[process.env.NODE_ENV || 'development'];