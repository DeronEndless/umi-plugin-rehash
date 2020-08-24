// ref:
// - https://umijs.org/plugins/api

export default function (api, opt = {}) {
  // 修改 Webpack 配置
  api.chainWebpackConfig(config => {
    config
      .plugin('extract-css')
      .tap(args => {
        return [
          {
            ...args,
            filename: `[name].${opt.hash}.css`, 
            chunkFilename: `[name].${opt.hash}.chunk.css`
          }
        ]
      })
    
    config.output.filename(`[name].${opt.hash}.js`)
    config.output.chunkFilename(`[name].${opt.hash}.async.js`)
  })
}
