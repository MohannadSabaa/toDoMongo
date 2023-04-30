const {join} = require('path');


const homePage = async (req, res) => {
    res.sendFile(join(__dirname, '/index.html'))
}


module.exports = {homePage}