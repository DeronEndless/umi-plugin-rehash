// ref:
// - https://umijs.org/plugins/api

/**
 * 该插件用于umi自定义build后的hash
 * 
 * @param {object} api 系统api
 * @param {object} options 配置参数
 * @param {string} options.hash 自定义的hash
 * @param {string} options.mode 模式定义 默认hash 可选值：'hash' | 'query'
 */
export default function (api, { hash, mode = 'hash' }) {
  const CSS_FILENAME = {
    'hash': {
      filename: `[name].${hash}.css`,
      chunkFilename: `[name].${hash}.chunk.css`,
    },
    'query': {
      filename: `[name].css`,
      chunkFilename: `[name].chunk.css`,
    },
  };

  const JS_FILENAME = {
    'hash': {
      filename: `[name].${hash}.js`,
      chunkFilename: `[name].${hash}.async.js`,
    },  
    'query': {
      filename: `[name].js`,
      chunkFilename: `[name].async.js`,
    },
  };

  // 修改 Webpack 配置
  api.chainWebpackConfig(config => {
    config
      .plugin('extract-css')
      .tap(args => {
        return [
          {
            ...args,
            filename: CSS_FILENAME[mode].filename, 
            chunkFilename: CSS_FILENAME[mode].chunkFilename,
          }
        ]
      });
    
    config.output.filename(JS_FILENAME[mode].filename);
    config.output.chunkFilename(JS_FILENAME[mode].chunkFilename);
  })

  if (mode === 'query') {
    api.modifyHTMLWithAST(($) => {
      
      $('link[href="/umi.css"]').attr('href', `/umi.css?v=${hash}`);
      $('script[src="/umi.js"]').attr('src', `/umi.js?v=${hash}`);

      return $;
    });
  };
};
