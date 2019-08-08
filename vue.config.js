//解决跨域问题 ，数据反向代理 
module.exports = {
    publicPath:'./',
    devServer: {
        // 代理
        proxy: {
            '/api': {
                // axios调用的时候 this.axios.get('/api/XXXXX接口'，{params}).then(result,=>{})
                target: 'http://39.97.33.178',
                changeOrigin: true
            },
            '/login': {
                target: 'http://192.168.6.175',
                changeOrigin: true
            }
        }
    }
}