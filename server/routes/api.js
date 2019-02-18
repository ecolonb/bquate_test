const { getAllTracks, getAlbumList } = require('../controllers/api')

const apiRouter = require('express').Router();

apiRouter.get('/tracks/getall', getAllTracks)
apiRouter.get('/albums/by_country_gender/:cc/:gender', getAlbumList)

module.exports = {
    apiRouter
}