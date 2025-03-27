![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
# Typescript

### Pré-requisitos

    *nodeJS
    *Vscode

### Fork do projeto

[https://github.com/alura-cursos/typescript-curso-1](https://github.com/alura-cursos/typescript-curso-1)

### Iniciar projeto

No terminal, precisamos baixar os módulos da aplicação:

`npm install`

### Dist/ npm run serve

Tudo que está dentro da pasta dist vai ser compartilhado com nosso navegador.
Precisamos compartilhar a pasta dist com o navegador dentro de package.json.
Em package.json podemos ver a pasta está dist sendo compartilhada: "server": "lite-server --baseDir=dist".
A pasta dist é a raiz do projeto 

Para abri o projeto no navegador usamos o comando
`npm run server`

Roda na porta 3000

### Instalar o compilador Typescript

`npm install typescript@versao --save-dev`

### Anotações

    Cria arquivo app.js
    Coloca link desse arquivo no index.html
    <script type="module" src="js/app.js"></script>



