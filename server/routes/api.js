const { getAllTracks } = require('../controllers/tracks');
const { getAlbumList, getAllAlbums } = require('../controllers/albums');
const { getAllArtists } = require('../controllers/artists');
const apiRouter = require('express').Router();

//tracks
apiRouter.get('/tracks/getall', getAllTracks);

//Albums
apiRouter.get('/albums/by_country_gender/:cc/:gender', getAlbumList)
apiRouter.get('/albums/getall', getAllAlbums)

//Artists
apiRouter.get('/artists/getall', getAllArtists)


module.exports = {
    apiRouter
}