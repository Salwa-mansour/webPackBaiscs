const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode:'development',
    entry:{
     main:path.resolve(__dirname,'./src/index.js'),

    },
    output:{
        filename: '[name].bundle.js',
        path:path.resolve(__dirname,'dist'),
        clean:true,
    },
    module:{
        rules:[
            {
                test:/\.css$/i,
                use:[
                    'style-loader',
                    'css-loader',
                    {
                        loader: "postcss-loader",
                        options: {
                          postcssOptions: {
                            plugins: [
                              [
                                "autoprefixer",
                                {
                                  // Options
                                },
                              ],
                            ],
                          },
                        },
                      },
               
                ],
            },
        ],
    },
    devtool:'source-map',
    devServer:{
        static:{
       directory:path.resolve(__dirname,'dist')
      },
      watchFiles: ['src/**/*.php', 'src/**/*'],
      port:3000,
      open:false,
      hot:true,
      compress:true,
      historyApiFallback:true,
    },
      optimization: {
        runtimeChunk: 'single',
      },
    plugins:[
      new HtmlWebpackPlugin({
        title:'outpout mannagmengit',
        template:path.resolve(__dirname,'./src/index.html'),
      })
    ],
};