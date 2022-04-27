const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')))
app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
});

const server = app.listen(4000, () => {
    console.log(`Listening on port:${server.address().address}:${server.address().port}`)
})