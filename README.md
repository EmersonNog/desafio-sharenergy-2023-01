<h1>📢 Desafio Sharenergy 2023-01 📢</h1>

## ⚡ Features ⚡

- [x] Login Page 
- [x] Autenticação com username/senha
- [x] API Random User Generator
- [x] API HTTP Cat - Status Code
- [x] API Random Dog
- [x] CRUD

---

## 🎥 Link do video de explicação
```
https://www.youtube.com/watch?v=4gEVw467DkM
```

---

<br/>

## 🤔 Como iniciar o sistema?
<p>💡 Aqui está as instruções de como iniciar o projeto</p>

<br/>

```bash
# Clonando o repositório
$ git clone <https://github.com/EmersonNog/desafio-sharenergy-2023-01/tree/emerson-nogueira-dos-santos>

# Entrando na pasta raiz do projeto
$ cd DesafioDev

# Instalando as dependências do arquivo package.json
$ yarn install
```
<br/>

### 🎲 Rodando o Back-end na porta:3000
```bash
$ yarn dev
```

### 🎲 Rodando o Front-end na porta:3001
```bash
$ yarn start
```

---
</br>

# 🕵🏻 Aplicação

## 🔒 Login de acesso

```
Username: desafiosharenergy
Password: sh@r3n3rgy
```

## 🔀 Tela Users Random

```
Será gerado uma página com 10 usuários, nessa
tela tera a paginificação e busca de usuário por 
genêro e nacionalidade.
```

## 🐈 Tela Http Cat
```
Ao digitar um status code relativo a um codigo HTTP,
será renderizada uma imagem de um gato com o status
code, se não tiver, retorna um 404 not found.
```

## 🐕 Tela Random Dog
```
Sempre o botão de refresh for clicado será 
renderizado uma imagem/gif de um cachorrinho
aleatório.
```

## 📋 CRUD
```
Nessa parte da aplicação terá duas áreas, lado esquerdo 
para cadastrar e na parte direita será onde ficada as box
com os dados de cada registro. Sendo assim possivel,
adicionar, visualizar, editar e deletar os registros.
```

---
</br>

## 👨‍💻 Tecnologias utilizadas
<br/>

🛠️ As seguintes ferramentas foram usadas na construção do projeto:

- [ReactJS](https://pt-br.reactjs.org/)
- [NodeJS](https://nodejs.org/en/)
- [Axios](https://axios-http.com/ptbr/docs/intro)
- [Express](https://expressjs.com/pt-br/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Nodemon](https://nodemon.io/)
- [HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)

---

<br/>
<br/>

## 🏛️ Arquitetura do Projeto

<br/>

```markdown
src/
  ├── assets/
  │     ├── logo.png
  │     └── simbolEnergy.jpg
  │
  ├── component/
  │     ├── Form/
  │     │    ├── Button.js
  │     │    ├── Button.module.css
  │     │    ├── Input.js
  │     │    ├── Input.module.css
  │     │    └── Lista.js
  │     ├── Layouts/
  │     │    ├── Footer.js 
  │     │    ├── Footer.module.css
  │     │    ├── Navbar.js
  │     │    └── Navbar.module.css
  │     ├── Pages/
  │     │    ├── Cadastro.js
  │     │    ├── Cadastro.module.css
  │     │    ├── HttpCat.js
  │     │    ├── HttpCat.module.css
  │     │    ├── Login.js
  │     │    ├── Login.module.css
  │     │    ├── RandomDog.js
  │     │    ├── RandomDog.module.css
  │     │    ├── UserGenerator.js
  │     │    └── UserGenerator.module.css
  │     ├── Services/
  │     │    └── api.js 
  │     │
  │     └── Styles/
  │          ├── Button.module.css
  │          ├── Cadastro.module.css
  │          ├── Footer.module.css
  │          ├── HttpCat.module.css
  │          ├── Input.module.css
  │          ├── Login.module.css
  │          ├── Navbar.module.css
  │          ├── RandomDog.module.css
  │          └── UserGenerator.module.css
  │
  ├── config/
  │     └── dbConfig.js
  │     
  ├── controllers/
  │     └── DadosController.js
  │     
  ├── models/
  │      └── Dados.js
  │
  ├── App.js
  ├── index.js
  ├── routes.js
  └── server.js
```

Made by Emerson N. Santos 👨🏼‍💻 - [LinkedIn](https://www.linkedin.com/in/noggueira)