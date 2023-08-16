module.exports = {
    webpack: function (config:any) {
      config.module.rules.push({
        test: /\.md$/,
        use: 'raw-loader',
      })
      return config
    },
  }

  export {};