const pool = require('../database/db');
const getAllTracks = async(req, res) => {
    const qrySql = `SELECT ttracks.id,ttracks.title, talbum.title,tuser.email, tuser.countrycode 
    FROM bquate_test_musica.tracks ttracks
    inner JOIN bquate_test_musica.albums talbum on ttracks.albumid = talbum.id 
    inner JOIN bquate_test_musica.users tuser on tuser.id = ttracks.userid`;
    const responseData = await pool.query(qrySql);
    console.log('Response data: ', responseData);
    return res.status(200).json(responseData)
}

const getAlbumList = async(req, res) => {
    const geneder = req.params.gender;
    const countrycode = req.params.cc;
    console.log('sdsds==>>', geneder, countrycode);
    const qrySql = `SELECT talbum.id, talbum.title, talbum.artist, talbum.label,talbum.genre, tuser.name, tuser.countrycode  FROM bquate_test_musica.tracks ttracks
    INNER JOIN bquate_test_musica.albums talbum on ttracks.albumid = talbum.id 
    INNER JOIN bquate_test_musica.users tuser on tuser.id = ttracks.userid
    WHERE tuser.countrycode = '${countrycode}' and talbum.genre = '${geneder}'`;
    const responseData = await pool.query(qrySql);
    console.log('Response data: ', responseData);
    return res.status(200).json(responseData)
}


module.exports = {
    getAllTracks,
    getAlbumList
}