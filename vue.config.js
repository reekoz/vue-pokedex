/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
  pwa: {
    name: 'Pokedex',
    themeColor: '#363b81',
    msTileColor: '#363b81',
    manifestPath: 'manifest.json',
    workboxOptions: {
      exclude: [/\.map$/, /_redirects/] //this fixed it.
    }
  }
};
