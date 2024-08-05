const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode:'production',
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
    plugins:[
      new HtmlWebpackPlugin({
        title:'outpout mannagmengit',
        template:path.resolve(__dirname,'./src/index.html'),
      }),
    ],
};