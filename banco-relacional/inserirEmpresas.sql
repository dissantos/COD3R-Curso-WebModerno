alter table empresas modify cnpj varchar(20)

INSERT INTO empresas (nome,cnpj)
values
    ('Bradesco',12012348237),
    ('Vale',193448435590),
    ('Cielo',9419328455);

INSERT INTO empresas_unidades (empresas_id,cidade_id,sede)
values
    (1,1,1),
    (1,2,0),
    (2,1,0),
    (2,2,1);