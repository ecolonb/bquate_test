const pool = require('../database/db');

const getAllArtists = async(req, res) => {
    const qrySql = `SELECT tuser.id,tuser.name, tuser.email, tuser.countrycode,tcountry.name as country
    FROM bquate_test_musica.users tuser LEFT JOIN bquate_test_musica.country tcountry ON tuser.countrycode = tcountry.code`
    const qryResponse = await pool.query(qrySql);
    const dataResponse = {
        ok: true,
        message: 'Getting all artists',
        artists: qryResponse
    }
    return res.status(200).json(dataResponse);
}
module.exports = {
    getAllArtists
}