const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    lintOnSave: true,

    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('common', resolve('src/common'))
            .set('components', resolve('src/components'))
            .set('views', resolve('src/views'))
    },

    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [
                path.resolve(__dirname, './src/common/less/variable.less')
            ]
        },
        'postcss-px-to-viewport': {
            unitToConvert: 'px',
            viewportWidth: 375,
            unitPrecision: 5,
            propList: ['*'],
            viewportUnit: 'vw',
            fontViewportUnit: 'vw',
            selectorBlackList: [],
            minPixelValue: 1,
            mediaQuery: false,
            replace: true,
            exclude: ['node_modules'],
            landscape: false,
            landscapeUnit: 'vw',
            landscapeWidth: 568
        }
    }
}
