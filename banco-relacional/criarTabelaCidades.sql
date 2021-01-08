create table if not exists cidades (
    id int unsigned not null AUTO_INCREMENT,
    nome varchar(255) not null,
    estado_id int unsigned not null,
    area decimal(10,2),
    primary key(id),
    FOREIGN KEY (estado_id) REFERENCES estados (id)
);