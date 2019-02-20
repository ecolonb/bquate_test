const pool = require('../database/db');

const getAllTracks = async(req, res) => {
    const qrySql = `SELECT ttracks.id, ttracks.title as track_title, talbum.title as album_title,tuser.email, tuser.countrycode 
    FROM bquate_test_musica.tracks ttracks
    inner JOIN bquate_test_musica.albums talbum ON ttracks.albumid = talbum.id 
    inner JOIN bquate_test_musica.users tuser ON tuser.id = ttracks.userid`;
    const qryResponse = await pool.query(qrySql);
    const dataResponse = {
        ok: true,
        message: 'Getting all the tracks',
        tracks: qryResponse
    }
    return res.status(200).json(dataResponse)
}


module.exports = {
    getAllTracks
}