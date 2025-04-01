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

### tscongif.json

    {
        "compilerOptions": {
            "outDir": "dist/js",
            "target": "ES6",
            "noEmitOnError": true,
            "noImplicitAny": true
        },
        "include": ["app/**/*"]
    }

### package.json

    {
        "name": "alurabank",
        "version": "1.0.0",
        "description": "",
        "main": "index.js",
        "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1",
            "server": "lite-server --baseDir=dist",
            "start": "concurrently \"npm run watch\" \"npm run server\"",
            "compile": "tsc",
            "watch": "tsc -w"
        },
        "author": "",
        "license": "ISC",
        "devDependencies": {
            "concurrently": "^6.0.0",
            "lite-server": "^2.6.1",
            "typescript": "^4.2.2"
        }
    }

> "watch": "tsc -w" -> Monitora os arquivos para que assim que tiver alguma alteração ele compile. Preciso ativar ele com o comando `npm run watch`

### npm run start

> O problema que enquanto esse comando está rodando não consigo rodar o npm run server para rodar o servidor web: Em package.json, a linha `"start": "concurrently \"npm run watch\" \"npm run server\"",` e `"concurrently": "^6.0.0",` permite rodar dois comando ao mesmo tempo. 

Para iniciar usamos o comando: `npm run start`

### Comando para compilar

`npm run compile`

Só compila se não tiver nenhum erro

### Anotações

    Cria arquivo app.js
    Coloca link desse arquivo no index.html
    <script type="module" src="js/app.js"></script>

    --------

    O navegador não entende a linguagem typescript.
    A linguagem Typescript precisa ser compilada para o navegador entender.

    Precisamos usar a pasta app para colocar os arquivos ts e a pasta dist para receber os arquivos ts compilados para js. Assim o navegador que lê a pasta dist consegue interpretar/entender.

### Tipos de elementos

    Input: HTMLInputElement
    Números: Number
    Datas: Date
    Texto: String

### Generic types - Array 

![Generic array](https://yakovfain.com/wp-content/uploads/2019/03/lib_d_ts.png?w=760)

### Comando para rodar o projeto

Compilar:

`npm run compile`

Compilar, observando alterações:

`npm run watch`

Rodar o servidor:

`npm run server`

Compilar e ao mesmo tempo rodar o servidor:

`npm run start`






