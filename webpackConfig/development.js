const path = require('path');

module.exports = {
    mode: "development",
    entry: "./src/client/index.js",
    output: {
        path: path.resolve(__dirname, "../public"),
        filename: "all.js",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015','react'],
                        plugins: ['transform-object-rest-spread']
                    }
                }
            },
        ]
    },
    watch: true, // enable this line when there's no dev_server
}
