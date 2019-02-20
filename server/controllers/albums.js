const pool = require('../database/db');

const getAlbumList = async(req, res) => {
    const geneder = req.params.gender;
    const countrycode = req.params.cc;
    console.log('sdsds==>>', geneder, countrycode);
    const qrySql = `SELECT talbum.id, talbum.title, talbum.artist, talbum.label,talbum.genre, tuser.name, tuser.countrycode  
    FROM bquate_test_musica.tracks ttracks
    INNER JOIN bquate_test_musica.albums talbum ON ttracks.albumid = talbum.id 
    INNER JOIN bquate_test_musica.users tuser ON tuser.id = ttracks.userid
    WHERE tuser.countrycode = '${countrycode}' and talbum.genre = '${geneder}'`;
    const qryResponse = await pool.query(qrySql);
    const dataResponse = {
        ok: true,
        message: `Getting tracks: country: '${countrycode}' Gender: '${geneder}'`,
        tracks: qryResponse
    }
    return res.status(200).json(dataResponse);
}

const getAllAlbums = async(req, res) => {

    const qrySql = `SELECT talbum.id, talbum.title, talbum.label, talbum.genre,tuser.name, tuser.countrycode, tcountry.name
    FROM bquate_test_musica.albums talbum 
    INNER JOIN bquate_test_musica.users tuser ON tuser.id = talbum.userid
    LEFT JOIN bquate_test_musica.country tcountry ON tuser.countrycode = tcountry.code`
    const qryResponse = await pool.query(qrySql);
    const dataResponse = {
        ok: true,
        message: 'Getting all albums',
        albums: qryResponse
    }
    return res.status(200).json(dataResponse);
}
module.exports = {
    getAlbumList,
    getAllAlbums
}