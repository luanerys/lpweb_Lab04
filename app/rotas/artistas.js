let moment = require("moment");

module.exports = function(app) {
  app.get("/artistas/create", (req, resp) =>
    resp.render("artistas/form-artista")
  );

  app.get("/artistas/editar/(:id)", function(req, resp, next) {
    let conexao = new app.infra.ConnectionFactory().getConexao();
    conexao.query(
      "SELECT * FROM artistas where id = ?",
      req.params.id,
      function(err, rows, fields) {
        if (err) throw err;

        if (rows.length <= 0) {
          req.flash("error", "Artista não encontrado!");
          resp.redirect("/artistas");
        } else {
          resp.render("artistas/form-artista-edit", {
            title: "Editar Artista",
            id: rows[0].id,
            nome_artista: rows[0].nome_artista,
            nacionalidade: rows[0].nacionalidade,
            data_nascimento: rows[0].data_nascimento,
            moment: moment
          });
        }
      }
    );
    // resp.render("artistas/form-artista");/
  });

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
      resp.render("/artistas/form-artista", {
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

  app.post("/artistas/deletar/(:id)", function(req, resp) {
    // console.log(artista);

    // req.assert("nome", "Nome do artista é obrigatório.").notEmpty();
    // req.assert("nacionalidade", "Nacionalidade é obrigatório").notEmpty();
    // req.assert("data_nascimento", "Data inválida").isDate();

    let erros = req.validationErrors();

    if (erros) {
      resp.render("/artistas/form-artista", {
        errosValidacao: erros,
        artista: artista
      });
      return;
    }

    let conexao = new app.infra.ConnectionFactory().getConexao();
    let artistas = new app.repositorio.ArtistaRepository(conexao);

    artistas.remove(req.params.id, function(erros, resultados) {
      //resp.render('artistas/listagem' );
      resp.redirect("/artistas");
    });
    conexao.end();
  });
};
