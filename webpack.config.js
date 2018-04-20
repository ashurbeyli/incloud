const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const clientConfig = {
  mode: 'production',
  name: 'client',
  resolve: {
    alias: {
      Assets: path.resolve(__dirname, 'lib/client/assets/'),
    },
    modules: [path.resolve('./lib'), path.resolve('./node_modules')]
  },
  entry: {
    clientVendor: [
      'babel-polyfill',
      'react',
      'react-dom',
      'redux',
      'react-redux',
      'react-bootstrap',
      'react-router-bootstrap',
      'react-router-config',
      'react-router-dom',
      'prop-types',
    ],
    clientApp: ['./lib/client/renderers/dom.js']
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            'presets': [
              'react',
              'env',
              'stage-2'
            ],
          }
        }
      },
      {
        test: /\.(png|jpg)$/i,
        exclude: /node_modules/,
        loader: 'url-loader',
        include: path.resolve(__dirname, 'lib/client/assets/images')
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract('css-loader!sass-loader')
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({ filename: 'styles.css', allChunks: true }),
  ]
};

const serverConfig = {
  mode: 'production',
  name: 'server',
  target: 'node',
  externals: [nodeExternals()],
  resolve: {
    alias: {
      Assets: path.resolve(__dirname, 'lib/client/assets/'),
    }
  },
  entry: {
    serverVendor: [
      'babel-polyfill',
      'react',
      'react-dom',
      'redux',
      'react-redux',
      'react-bootstrap',
      'react-router-bootstrap',
      'react-router-config',
      'react-router-dom',
      'prop-types',
    ],
    serverApp: ['./lib/client/renderers/server.js']
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            'presets': [
              'react',
              'env',
              'stage-2'
            ],
          }
        }
      },
      {
        test: /\.(png|jpg)$/i,
        exclude: /node_modules/,
        loader: 'url-loader',
        include: path.resolve(__dirname, 'lib/client/assets/images')
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract('css-loader!sass-loader')
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({ filename: 'styles.css', allChunks: true }),
  ]
};

module.exports = [
  clientConfig,
  serverConfig
];