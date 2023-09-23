const path = require('path');

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      '@babel/plugin-proposal-export-namespace-from',
      'react-native-reanimated/plugin',
      require.resolve('expo-router/babel'),
      [
        'module-resolver',
        {
          alias: {
            assets: path.resolve(__dirname, './assets'),
            components: path.resolve(__dirname, './components'),
            common: path.resolve(__dirname, './common'),
            services: path.resolve(__dirname, './services'),
            app: path.resolve(__dirname, './app'),
            utils: path.resolve(__dirname, './utils'),
          },
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
        },
      ],
    ],
  };
};
