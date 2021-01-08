insert into estados (id,nome,sigla,regiao,populacao)
values (1000,'Novo',"NV",'Sul',2.36);

insert into estados (nome,sigla,regiao,populacao)
values ('Novo2',"N2",'Sul',2.36);

select * from estados where populacao = 2.36;
