/* eslint-disable */
const path = require('path')

module.exports = function override(config, env) {
  const overrideConfig = config

  overrideConfig.resolve = {
    ...config.resolve,
    alias: {
      ...config.resolve.alias,
      ...{
        'modules': path.resolve(__dirname, 'src/modules'),
        'ui': path.resolve(__dirname, 'src/ui'),
        'utils': path.resolve(__dirname, 'src/utils'),
      },
    },
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  }

  return overrideConfig
}