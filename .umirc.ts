import path from 'path'
import { defineConfig } from '@umijs/max';
import CopyWebpackPlugin from 'copy-webpack-plugin';
const cesiumSource = path.resolve('./node_modules/cesium/Build/Cesium/')

export default defineConfig({
  antd: {},
  access: {},
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  hash: true,
  history: {
    type: 'hash',
  },
  jsMinifier: 'none',
  model: {},
  initialState: {},
  request: {},
  mfsu: false,
  layout: {
    title: 'czml-editor',
  },
  define: {
    CESIUM_BASE_URL: './library',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      title: 'CZML-editor',
      path: '/home',
      component: './Home',
      layout: false
    },
  ],
  npmClient: 'pnpm',
  chainWebpack(config, { webpack }) {

    config.devServer.stats('errors-only')
    config.plugin('copy').use(CopyWebpackPlugin, [
      {
        patterns: [
          {
            from: path.resolve(__dirname, 'public'),
            to: './',
          },
          {
            from: path.resolve(cesiumSource, 'ThirdParty'),
            to: 'library/ThirdParty', // dist/examples
          },
          {
            from: path.resolve(cesiumSource, 'Assets'),
            to: 'library/Assets', // dist/examples
          },
          {
            from: path.resolve(cesiumSource, 'Widgets'),
            to: 'library/Widgets', // dist/examples
          },
          {
            from: path.resolve(cesiumSource, 'Workers'),
            to: 'library/Workers', // dist/examples
          },
        ],
      },
    ])

  }
});

