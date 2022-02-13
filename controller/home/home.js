const model = require('../../model/model')

const homePage = (req,res) => {
    res.render('home', model.home.dataHomePage())
}
    
module.exports = {
    homePage
}