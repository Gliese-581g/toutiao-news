module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://m.toutiao.com',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
}
}
}
};