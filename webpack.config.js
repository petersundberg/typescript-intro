module.exports = {
    entry: './src/index.ts', // modifiera enligt din miljö.
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node-modules/
        }]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: 'main.js' // Uppdatera index.html så att du har rätt fil.
    }
}