let moment = require("moment");

module.exports = function(app) {
  app.get("/", (req, resp) => resp.render("index"));

  app.get("/musicas/create", (req, resp) => resp.render("musicas/form-musica"));
  app.get("/artistas/create", (req, resp) =>
    resp.render("artistas/form-artista")
  );
  app.get("/albuns/create", (req, resp) => resp.render("albuns/form-album"));

  app.get("/artistas", function(req, resp) {
    let conexao = new app.infra.ConnectionFactory().getConexao();
    let artistas = new app.repositorio.ArtistaRepository(conexao);

    artistas.todos(function(erros, resultado) {
      if (erros) {
        console.log(erros);
      }
      resp.render("artistas/lista-artista", {
        lista: resultado,
        moment: moment
      });
    });
    conexao.end();
  });

  app.post("/artistas", function(req, resp) {
    let artista = req.body;
    console.log(artista);

    // req.assert("nome", "Nome do artista é obrigatório.").notEmpty();
    // req.assert("nacionalidade", "Nacionalidade é obrigatório").notEmpty();
    // req.assert("data_nascimento", "Data inválida").isDate();

    let erros = req.validationErrors();

    if (erros) {
      resp.render("artistas/form-artista", {
        errosValidacao: erros,
        artista: artista
      });
      return;
    }

    let conexao = new app.infra.ConnectionFactory().getConexao();
    let artistas = new app.repositorio.ArtistaRepository(conexao);

    artistas.salva(artista, function(erros, resultados) {
      //resp.render('artistas/listagem' );
      resp.redirect("/artistas");
    });

    conexao.end();
  });
};
