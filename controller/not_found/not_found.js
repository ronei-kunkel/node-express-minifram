const model = require('../../model/model')

const notFoundPage = (req, res) => {
    res.status(404).render('404', model.not_found.dataNotFoundPage())
}

module.exports = {
    notFoundPage
}