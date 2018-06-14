import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import ManifestPlugin from 'webpack-manifest-plugin';

const HOST = process.env.HOST || '127.0.0.1';
const PORT = process.env.PORT || '8888';

const isDev = Boolean(process.env.NODE_ENV === 'development');

const bundle = isDev ? ['react-hot-loader/patch', 'babel-polyfill', path.join(__dirname, 'src/index.js')] : ['babel-polyfill', path.join(__dirname, 'src/index.js')];

const config = {
    entry: {
        bundle,
    },
    devtool: process.env.WEBPACK_DEVTOOL || 'eval-source-map',
    output: {
        publicPath: '/',
        path: path.join(__dirname, 'public'),
        filename: isDev ? './js/[name].js' : './js/[name]-[hash:8].js',
    },
    resolve: {
        modules: [
            path.resolve('./src'),
            path.resolve('./node_modules'),
        ],
    },
    watch: isDev,
    module: {
        rules: [
            {
                test: /\.js?$/,
                include: [
                    path.resolve(__dirname, 'src'),
                ],
                use: 'babel-loader?cacheDirectory=true',
            },
            {
                test: /\.scss$/,
                exclude: ['node_modules'],
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader',
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: [
                                    require('autoprefixer'),
                                ],
                            },
                        },
                        {
                            loader: 'sass-loader?sourceMap',
                        }],
                }),
            },
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader?importLoaders=1'],
                exclude: ['node_modules'],
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'file-loader',
            },
            {
                test: /\.(woff|woff2)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'file-loader?prefix=font/&limit=5000',
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'file-loader?limit=10000&mimetype=application/octet-stream',
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'file-loader?limit=10000&mimetype=image/svg+xml',
            },
            {
                test: /\.gif/,
                exclude: /(node_modules|bower_components)/,
                loader: 'file-loader?limit=10000&mimetype=image/gif',
            },
            {
                test: /\.jpg/,
                exclude: /(node_modules|bower_components)/,
                loader: 'file-loader?limit=10000&mimetype=image/jpg',
            },
            {
                test: /\.png/,
                exclude: /(node_modules|bower_components)/,
                loader: 'file-loader?limit=10000&mimetype=image/png',
            },
        ],
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin({
            filename: 'style.css',
            allChunks: true,
        }),
        // new DashboardPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            files: {
                css: ['style.css'],
                js: ['bundle.js'],
            },
        }),
        // new CopyWebpackPugin([{ from: 'src/server.js', to: 'public' }]),
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
        }),
        new ManifestPlugin({
            fileName: 'build-manifest.json',
        }),
    ],
    devServer: {
        contentBase: './public',
        // do not print bundle build stats
        noInfo: true,
        // enable HMR
        hot: true,
        // embed the webpack-dev-server runtime into the bundle
        inline: true,
        // serve index.html in place of 404 responses to allow HTML5 history
        historyApiFallback: true,
        port: PORT,
        host: HOST,
    },
};

export default config;
