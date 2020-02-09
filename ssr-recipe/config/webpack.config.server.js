const nodeExternals = require('webpack-node-externals');
const paths = require('./paths');
const getCssModuleLocalIdent = require('react-dev-utils/getCssModuleLocalIdent');
// CSS 모듈의 고유 classname을 만들 때 필요한 옵션
const webpack = require('webpack');
const getClientEnvironment = require('./env');

const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;

const publicUrl = paths.servedPath.slice(0, -1);
const env = getClientEnvironment(publicUrl);

module.exports = {
    mode: 'production',
    entry: paths.ssrIndexJs,
    target: 'node',
    output: {
        path: paths.ssrBuild,
        filename: 'server.js',
        chunkFilename: 'js/[name].chunk.js',
        publicPath: paths.servedPath,
    },
    module: {
        rules: [{
            oneOf: [{
                    test: /\.(js|mjs|jsx|ts|tsx)$/,
                    include: paths.appSrc,
                    loader: require.resolve('babel-loader'),
                    options: {
                        customize: require.resolve(
                            'babel-preset-react-app/webpack-overrides'
                        ),
                        plugins: [
                            [
                                require.resolve('babel-plugin-named-asset-import'),
                                {
                                    loaderMap: {
                                        svg: {
                                            ReactComponent: '@svgr/webpack?-svgo![path]'
                                        }
                                    }
                                }
                            ]
                        ],
                        cacheDirectory: true,
                        cacheCompression: false,
                        compact: false
                    }
                },
                //css를 위한 처리
                {
                    test: cssRegex,
                    exclude: cssModuleRegex,
                    loader: require.resolve('css-loader'),
                    options: {
                        exportOnlyLocals: true
                    }
                },
                // css 모듈을 위한 처리
                {
                    test: cssModuleRegex,
                    loader: require.resolve('css-loader'),
                    options: {
                        modules: true,
                        exportOnlyLocals: true,
                        getLocalIdent: getCssModuleLocalIdent
                    }
                },
                // Sass를 위한 처리
                {
                    test: sassRegex,
                    exclude: sassModuleRegex,
                    use: [{
                            loader: require.resolve('css-loader'),
                            options: {
                                exportOnlyLocals: true
                            }
                        },
                        require.resolve('sass-loader')
                    ]
                },
                // Sass + CSS 모듈을 위한 처리
                {
                    test: sassRegex,
                    exclude: sassModuleRegex,
                    use: [{
                            loader: require.resolve('css-loader'),
                            options: {
                                modules: true,
                                exportOnlyLocals: true,
                                getLocalIdent: getCssModuleLocalIdent
                            }
                        },
                        require.resolve('sass-loader')
                    ]
                },
                //url-loader 를 위한 설정
                {
                    test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                    loader: require.resolve('url-loader'),
                    options: {
                        emitFile: false,
                        limit: 10000,
                        name: 'static/media/[name].[hash:8].[ext]'
                    }
                },
                //위에서 설정된 확장자를 제외한 파일들은 file-loader를 사용합니다.
                {
                    loader: require.resolve('file-loader'),
                    exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
                    options: {
                        emitFile: false,
                        name: 'static/media/[name].[hash:8].[ext]'
                    }
                }
            ]
        }]
    },
    resolve: {
        modules: ['node-modules']
    },
    externals: [nodeExternals()],
    plugins: [
        new webpack.DefinePlugin(env.stringified) //환경변수를 주입해줍니다.
    ]
}