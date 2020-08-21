module.exports = {
    plugins: {
        "posthtml-expressions": {
            locals: {
                GA_UA: process.env.GA_UA,
                ADSENSE_ID: process.env.ADSENSE_ID
            }
        }
    }
}