module.exports = function(app) {
    app.get('/', (req, resp) => resp.render('index'));

    app.get('/musicas/create', (req, resp) => resp.render('musicas/form-musica'));
    app.get('/artistas/create', (req, resp) => resp.render('artistas/form-artista'));
    app.get('/albuns/create', (req, resp) => resp.render('albuns/form-album'));


    app.get('/artistas', function(req, resp) {

        let conexao = new app.infra.ConnectionFactory().getConexao();
        let artistas = new app.repositorio.ArtistaRepository(conexao);

        artistas.todos(function(erros, resultado) {

            if (erros) {
                console.log(erros);
            }
            resp.render('artistas/lista-artista', { lista: resultado });
        });
        conexao.end();
    });
}