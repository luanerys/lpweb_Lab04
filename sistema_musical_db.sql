CREATE DATABASE sistema_musical_db;

USE sistema_musical_db;

CREATE TABLE artistas 
(
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	nome_artista VARCHAR(100),
    nacionalidade VARCHAR(100),
    data_nascimento DATE
);

CREATE TABLE albuns 
(
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nome_album VARCHAR(100),
    nome_artista VARCHAR(100),
    ano_lancamento YEAR(4),
    duracao_total FLOAT
);

CREATE TABLE musicas
(
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nome_musica VARCHAR(100),
    id_artista INT,
    id_album INT,
    FOREIGN KEY (id_artista) REFERENCES artistas(id),
    FOREIGN KEY  (id_album) REFERENCES albuns(id)
    );
    
    