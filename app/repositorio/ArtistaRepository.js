class ArtistaRepository {
  constructor(conexao) {
    this._conexao = conexao;
  }

  porId(id, callback) {
    this._conexao.query(`select * from artistas where id = ${id}`, callback);
  }

  todos(callback) {
    var vari = this._conexao.query("select * from artistas", callback);
    // console.log(vari);
  }

  salva(artista, callback) {
    console.log("ID " + artista.id);

    if (artista.hasOwnProperty("id") && artista.id > 0) {
      this._conexao.query(
        "update artistas set ? where id = " + artista.id,
        artista,
        callback
      );
      console.log("executou update");
    } else {
      // console.log(this._conexao);
      this._conexao.query("insert into artistas set ?", artista, callback);
      console.log("executou insert");
    }
  }

  remove(id, callback) {
    this._conexao.query("delete from artistas where id = " + id, callback);
  }
}

module.exports = () => {
  return ArtistaRepository;
};
