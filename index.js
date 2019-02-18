const express = require('express');
const app = new express();
const path = require('path')
const port = process.env.PORT || 2786;

const publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));


app.listen(port, () => {
    console.log(`Server on http://localhost:${port}`);
})