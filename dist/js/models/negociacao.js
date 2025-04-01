export class Negociacao {
    //como somente usamos para ver os dados usamos o public
    // usamos o readonly para esse valor não poder ser alterado
    constructor(data, quantidade, valor) {
        this.data = data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    //quando vou aplicar alguma lógica é interessante manter o get
    get volume() {
        return this.quantidade * this.valor;
    }
}
//consigo alterar quando está public
/*
const n = new Negociacao(new Date(), 23, 55);
n._data = new Date();
*/ 
