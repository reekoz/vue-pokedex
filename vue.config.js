/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
  pwa: {
    name: 'Pokedex',
    themeColor: '#3d008d',
    msTileColor: '#3d008d',
    manifestPath: 'manifest.json',
    workboxOptions: {
      exclude: [/\.map$/, /_redirects/] //this fixed it.
    }
  }
};
