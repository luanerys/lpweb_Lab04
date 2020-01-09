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

    salva(musica, callback) {
        console.log('ID ' + musica.id);

        if ((musica.hasOwnProperty('id')) && (musica.id > 0)) {
            this._conexao.query('update musicas set ? where id = ' + musica.id, musica, callback);
            console.log('executou update');

        } else {
            this._conexao.query('insert into musicas set ?', musica, callback);
            console.log('executou insert');

        }
    }

    remove(musica, callback) {
        this._conexao.query('delete from musicas where id = ' + musica.id, callback);
    }

}

module.exports = () => { return MusicaRepository };