let mysql = require('mysql');

class ConnectionFactory {

    constructor() {
        this.conexao = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: "sistema_musical_db"
        });

        // con.connect(function(err) {
        //     if (err) throw err;
        //     console.log("Connected!");
        //     /*Create a database named "mydb":*/
        //     con.query("CREATE DATABASE sistema_musical", function(err, result) {
        //         if (err) throw err;
        //         console.log("Database created");
        //     });
        // });

        // con.connect(function(err) {
        //     if (err) throw err;
        //     console.log("Connected!");
        //     var sql = "CREATE TABLE artistas (id INT AUTO_INCREMENT PRIMARY KEY, nome_artista VARCHAR(255), nacionalidade VARCHAR(255), data_nascimento DATE)";
        //     con.query(sql, function(err, result) {
        //         if (err) throw err;
        //         console.log("Table artistas created");
        //     });
        // });

        // con.connect(function(err) {
        //     if (err) throw err;
        //     console.log("Connected!");
        //     var sql = "CREATE TABLE albuns (id INT AUTO_INCREMENT PRIMARY KEY, nome_album VARCHAR(255), nome_artista VARCHAR(255), ano_lancamento YEAR(4), duracao_total FLOAT)";
        //     con.query(sql, function(err, result) {
        //         if (err) throw err;
        //         console.log("Table albuns created");
        //     });
        // });

        // con.connect(function(err) {
        //     if (err) throw err;
        //     console.log("Connected!");
        //     var sql = "CREATE TABLE musicas (id INT AUTO_INCREMENT PRIMARY KEY, nome_musica VARCHAR(255), id_artista INT FOREIGN KEY REFERENCES artistas (id), id_album INT FOREIGN KEY REFERENCES albuns (id))";
        //     con.query(sql, function(err, result) {
        //         if (err) throw err;
        //         console.log("Table musicas created");
        //     });
        // });

    }

    getConexao() {
        return this._conexao;
    }

}

module.exports = () => { return ConnectionFactory };