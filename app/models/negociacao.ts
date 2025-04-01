export class Negociacao {

    //como somente usamos para ver os dados usamos o public
    // usamos o readonly para esse valor não poder ser alterado
    constructor(
        public readonly data:Date, 
        public readonly quantidade:number, 
        public readonly valor:number
    ){ }

    //quando vou aplicar alguma lógica é interessante manter o get
    get volume():number{
        return this.quantidade * this.valor;
    }
}

//consigo alterar quando está public
/*
const n = new Negociacao(new Date(), 23, 55);
n._data = new Date();
*/