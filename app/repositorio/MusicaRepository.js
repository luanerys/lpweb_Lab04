class MusicaRepository {

    constructor(conexao) {
        this._conexao = conexao;
    }

    porId(id, callback) {
        this._conexao.query(`select * from musicas where id = ${id}`, callback);
    }


    todos(callback) {
        this._conexao.query('select * from musicas', callback);
    }
}