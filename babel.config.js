module.exports = {
  presets: ['module:metro-react-native-babel-preset'],

  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          _components: './src/components',
          _constants: './src/constants',
          _assets: './assets',
          _helpers: './src/helpers',
          _redux: './src/rdx',
          _store: './src/store',
          _services: './src/services'
        }
      }
    ]
  ]
};
