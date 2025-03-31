export class Negociacoes {
    constructor() {
        //array do tipo Negociacao. Posso declarar uma classe como um tipo
        this.negociacoes = [];
    }
    //adiciona em uma lista negociacoes a negociacao cadastrada
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
}
const negociacoes = new Negociacoes();
negociacoes.adiciona;
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
