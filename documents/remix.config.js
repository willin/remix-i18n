/**
 * @type {import('@remix-run/dev/config').AppConfig}
 */
const theme = require('./highlight');

module.exports = {
  appDirectory: 'app',
  assetsBuildDirectory: 'public/build',
  publicPath: '/build/',
  serverModuleFormat: 'esm',
  serverPlatform: 'neutral',
  serverBuildDirectory: 'build',
  devServerBroadcastDelay: 1000,
  ignoredRouteFiles: ['.*'],
  mdx: async (filename) => {
    const [remarkCodeHike] = await Promise.all([
      import('@code-hike/mdx').then((mod) => mod.remarkCodeHike)
    ]);

    return {
      remarkPlugins: [[remarkCodeHike, { theme, lineNumbers: true }]]
    };
  }
};
