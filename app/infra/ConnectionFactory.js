let mysql = require('mysql');

class ConnectionFactory {

    constructor() {
        this._conexao = mysql.createConnection({

            host: 'localhost',
            user: 'root',
            password: '',
            database: 'sistema_musical_db'
        });
    }


    getConexao() {
        return this._conexao;
    }

}

module.exports = () => { return ConnectionFactory };