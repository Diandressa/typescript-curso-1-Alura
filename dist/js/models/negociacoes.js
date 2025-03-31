export class Negociacoes {
    constructor() {
        //array do tipo Negociacao. Posso declarar uma classe como um tipo
        this.negociacoes = [];
    }
    //adiciona uma negociacao em uma lista negociacoes 
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    //Para imprimir a lista, readonly defini uma lista somente leitura
    lista() {
        return [...this.negociacoes];
    }
}
//instancia a lista
const negociacoes = new Negociacoes();
//adiciona a lista instanciando uma negociacao
//negociacoes.adiciona(new Negociacao())
