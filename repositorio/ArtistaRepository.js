class ArtistaRepository {

    constructor(conexao) {
        this._conexao = conexao;
    }

    porId(id, callback) {
        this._conexao.query(`select * from astistas where id = ${id}`, callback);
    }


    todos(callback) {
        this._conexao.query('select * from astistas', callback);
    }
}