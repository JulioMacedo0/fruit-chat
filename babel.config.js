module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.ios.tsx',
          '.android.ts',
          '.android.tsx',
          '.ts',
          '.tsx',
          '.js',
          '.jsx',
          '.json',
        ],
        alias: {
          '@components': './src/components',
          '@routes': './src/routes',
          '@theme': './src/theme',
          '@hooks': './src/hooks',
          '@screens': './src/screens',
          '@types': './src/types',
        },
      },
    ],
  ],
};
