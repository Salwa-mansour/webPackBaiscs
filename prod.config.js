const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode:'production',
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
    plugins:[
      new HtmlWebpackPlugin({
        title:'outpout mannagmengit',
        template:'./src/index.html',
      }),
    ],
};