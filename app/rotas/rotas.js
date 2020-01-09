
module.exports = function (app) {
    app.get('/', (req, resp) => resp.render('index'));

    app.get('/musicas/create', (req, resp) => resp.render('form-musica'));
}