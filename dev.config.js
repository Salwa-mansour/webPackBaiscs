const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode:'development',
    entry:{
     main:'./src/index.js',

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
      port:3000,
      open:true,
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
        template:'./src/index.html',
      }),

    ],
};