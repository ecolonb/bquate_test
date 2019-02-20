const express = require('express');
const app = new express();
const path = require('path')
const port = process.env.PORT || 2786;
const { apiRouter } = require('./server/routes/api.js')
const bodyParser = require('body-parser')
const publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//Enable CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
});

app.use('/api', apiRouter)

app.listen(port, () => {
    console.log(`Server on http://localhost:${port}`);
})