export class Negociacao {

    //como somente usamos para ver os dados usamos o public
    // usamos o readonly para esse valor não poder ser alterado
    constructor(
        private _data:Date, 
        public readonly quantidade:number, 
        public readonly valor:number
    ){ }

    //quando vou aplicar alguma lógica é interessante manter o get
    get volume():number{
        return this.quantidade * this.valor;
    }

    get data():Date{
        //criamos uma variável com o getDate que pega a data privada, porém é uma cópia agora, uma nova referência
        const data = new Date(this._data.getDate())
        return data;
    }
}
