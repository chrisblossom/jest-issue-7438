const babelJest = require("babel-jest")

const transformer = babelJest.createTransformer({
    babelrc: false,
    configFile: require.resolve("./.babelrc.js")
})

module.exports = transformer
