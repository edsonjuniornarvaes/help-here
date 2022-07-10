module.exports = function babelConfig(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@components': './src/components',
            '@features': './src/features',
            '@assets': './src/assets',
            '@styles': './src/styles',
            '@libs': './src/libs',
            '@hooks': './src/hooks',
            '@utils': './src/utils',
            '@': './src',
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
  };
};
