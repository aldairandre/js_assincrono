const appendFile = require('./modulos/appendFile')
const writeFile = require('./modulos/writeFile')
const open = require('./modulos/open')


appendFile('arq1.txt','Eu sou um arquivo apendado') //cria um arquivo novo com conteudo

writeFile('arq2.txt','O conteudo antido deste arquivo foi alterado por este') //Sobre escrevendo um arquivo ja existente 

open('arq3.txt') //Cria um arquivo vazio
