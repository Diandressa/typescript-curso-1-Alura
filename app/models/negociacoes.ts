import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    //array do tipo Negociacao. Posso declarar uma classe como um tipo
    private negociacoes:Array<Negociacao> = [];

    //adiciona em uma lista negociacoes a negociacao cadastrada
    adiciona(negociacao:Negociacao){
        this.negociacoes.push(negociacao)
    }
}

//instancia a lista
const negociacoes = new Negociacoes();

//adiciona a lista instanciando uma negociacao
negociacoes.adiciona(new Negociacao())


/*
const list:Array<number> = [];
list.push(10);
list.push('11')


const list:Array<string> = [];
list.push('Andressa');
list.push('Nicolau')

for(let nome of list){
    nome.
}
*/