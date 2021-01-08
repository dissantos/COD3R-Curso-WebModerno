-- Gerado por Oracle SQL Developer Data Modeler 19.4.0.350.1424
--   em:        2020-03-17 17:26:46 BRT
--   site:      Oracle Database 11g
--   tipo:      Oracle Database 11g



CREATE TABLE departamento (
    dnome                VARCHAR2(100) NOT NULL,
    dnumero              NUMBER NOT NULL,
    cpf_gerente          NUMBER NOT NULL,
    data_inicio_gerente  DATE NOT NULL
);

ALTER TABLE departamento ADD CONSTRAINT departamento_pk PRIMARY KEY ( dnumero );

CREATE TABLE dependente (
    fcpf             NUMBER NOT NULL,
    nome_dependente  VARCHAR2(30) NOT NULL,
    sexo             VARCHAR2(1),
    datanasc         DATE NOT NULL,
    parentesco       VARCHAR2(30) NOT NULL
);

ALTER TABLE dependente ADD CONSTRAINT dependente_pk PRIMARY KEY ( fcpf,
                                                                  nome_dependente );


CREATE TABLE funcionario (
    pnome           VARCHAR2(30) NOT NULL,
    minicial        VARCHAR2(30),
    unome           VARCHAR2(30) NOT NULL,
    cpf             NUMBER NOT NULL,
    datanasc        DATE  NOT NULL,
    endereco        VARCHAR2(200) NOT NULL,
    sexo            VARCHAR2(1),
    salario         NUMBER NOT NULL,
    cpf_supervisor  NUMBER,
    dnr             NUMBER NOT NULL
);

ALTER TABLE funcionario ADD CONSTRAINT funcionario_pk PRIMARY KEY ( cpf );

CREATE TABLE localizacao_dep (
    dnumero  NUMBER NOT NULL,
    dlocal   VARCHAR2(100) NOT NULL
);

ALTER TABLE localizacao_dep ADD CONSTRAINT localizacao_dep_pk PRIMARY KEY ( dnumero,
                                                                            dlocal );

CREATE TABLE projeto (
    projnome    VARCHAR2(50) NOT NULL,
    projnumero  NUMBER NOT NULL,
    projlocal   VARCHAR2(100) NOT NULL,
    dnum        NUMBER NOT NULL
);

ALTER TABLE projeto ADD CONSTRAINT projeto_pk PRIMARY KEY ( projnumero );

CREATE TABLE trabalha_em (
    fcpf   NUMBER NOT NULL,
    pnr    NUMBER NOT NULL,
    horas  NUMBER(3,1)
);

ALTER TABLE trabalha_em ADD CONSTRAINT trabalha_em_pk PRIMARY KEY ( fcpf,
                                                                    pnr );

ALTER TABLE departamento
    ADD CONSTRAINT departamento_funcionario_fk FOREIGN KEY ( cpf_gerente )
        REFERENCES funcionario ( cpf );

ALTER TABLE dependente
    ADD CONSTRAINT dependente_funcionario_fk FOREIGN KEY ( fcpf )
        REFERENCES funcionario ( cpf );

ALTER TABLE funcionario
    ADD CONSTRAINT funcionario_departamento_fk FOREIGN KEY ( dnr )
        REFERENCES departamento ( dnumero );

ALTER TABLE funcionario
    ADD CONSTRAINT funcionario_funcionario_fk FOREIGN KEY ( cpf_supervisor )
        REFERENCES funcionario ( cpf );

ALTER TABLE localizacao_dep
    ADD CONSTRAINT localizacao_dep_dep_fk FOREIGN KEY ( dnumero )
        REFERENCES departamento ( dnumero );

ALTER TABLE projeto
    ADD CONSTRAINT projeto_departamento_fk FOREIGN KEY ( dnum )
        REFERENCES departamento ( dnumero );

ALTER TABLE trabalha_em
    ADD CONSTRAINT trabalha_em_funcionario_fk FOREIGN KEY ( fcpf )
        REFERENCES funcionario ( cpf );

ALTER TABLE trabalha_em
    ADD CONSTRAINT trabalha_em_projeto_fk FOREIGN KEY ( pnr )
        REFERENCES projeto ( projnumero );



-- Relatório do Resumo do Oracle SQL Developer Data Modeler: 
-- 
-- CREATE TABLE                             6
-- CREATE INDEX                             0
-- ALTER TABLE                             14
-- CREATE VIEW                              0
-- ALTER VIEW                               0
-- CREATE PACKAGE                           0
-- CREATE PACKAGE BODY                      0
-- CREATE PROCEDURE                         0
-- CREATE FUNCTION                          0
-- CREATE TRIGGER                           0
-- ALTER TRIGGER                            0
-- CREATE COLLECTION TYPE                   0
-- CREATE STRUCTURED TYPE                   0
-- CREATE STRUCTURED TYPE BODY              0
-- CREATE CLUSTER                           0
-- CREATE CONTEXT                           0
-- CREATE DATABASE                          0
-- CREATE DIMENSION                         0
-- CREATE DIRECTORY                         0
-- CREATE DISK GROUP                        0
-- CREATE ROLE                              0
-- CREATE ROLLBACK SEGMENT                  0
-- CREATE SEQUENCE                          0
-- CREATE MATERIALIZED VIEW                 0
-- CREATE MATERIALIZED VIEW LOG             0
-- CREATE SYNONYM                           0
-- CREATE TABLESPACE                        0
-- CREATE USER                              0
-- 
-- DROP TABLESPACE                          0
-- DROP DATABASE                            0
-- 
-- REDACTION POLICY                         0
-- 
-- ORDS DROP SCHEMA                         0
-- ORDS ENABLE SCHEMA                       0
-- ORDS ENABLE OBJECT                       0
-- 
-- ERRORS                                   0
-- WARNINGS                                 0
