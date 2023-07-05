import MiniCssExtractPlugin from "mini-css-extract-plugin"
import  webpack from "webpack"
import { BuildOptions } from "./types/config"

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[]{
    const typescriptLoader =  {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const styleLoader = {
        
            test: /\.s[ac]ss$/i,
            use: [
              // Creates `style` nodes from JS strings
              options.isDev ? "style-loader" :  MiniCssExtractPlugin.loader,
              // Translates CSS into CommonJS
              {
                loader: "css-loader",
                options: {
                  modules: true
                }
              },
              // Compiles Sass to CSS
              "sass-loader",
            ],
          }
    

    return [
        typescriptLoader,
        styleLoader
    ]
}