module.exports = function(app) {

        app.get('/artistas', function(req, resp) {

            let conexao = new app.infra.ConnectionFactory().getConexao();
            let artistas = new app.repositorio.ArtistaRepository(conexao);

            artistas.todos(function(erros, resultado) {

                if (erros) {
                    console.log(erros);
                }
                resp.render('artistas/listagem', { lista: resultado });
            });
            conexao.end();
        });