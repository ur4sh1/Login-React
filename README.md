# Exercício de Node.js
<h1 align="center">:file_cabinet: Login</h1>

## :memo: Descrição
Execício de React, usando localStorage para armazenamento de informações de login.<br>

## :books: Funcionalidades
* Tela de login<br>
[x]Avisar quando os campos estão vázios na tentativa de login<br>
[x]Avisar quando não encontrar login no localstorage(key: user_db)<br>
* Tela de Cadastro<br>
[x]Adicionar um novo login no localstorage(key: user_db)<br>
[x]Criar verificação de login já cadastrado no localstorage(key: user_db)<br>
[x]Criar verificação de e-mail, avisar quando não for iguais.<br>
[]Verificar quantidade de caracteres no password, não pode ser menor que 6, (mínimo uma letra / mínimo um numero).<br>
* Tela home<br>
[x]Adicionar um token no locastorage(key: user_token) quando o login for efetuado<br>
[x]Remover Token quando realizar logoff

## :books: Futuras Funcionalidades
[]Backend - Api que verifica login no banco de dados(MySQL).<br>

## :rocket: Rodando o projeto
Para rodar o repositório é necessário clonar o mesmo, dar o seguinte comando para iniciar o projeto:
```
git clone 
```
Instalar o npm
```
npm i
```
Executar o projeto
```
npm run start
```

## :wrench: Histórico de comandos
Iniciando o projeto com React
```
npx create-react-app
```
Instalando bibliotecas style-components
```
yarn add style-components
```
Instalando bibliotecas react-router-dom
```
yarn add react-router-dom
```

