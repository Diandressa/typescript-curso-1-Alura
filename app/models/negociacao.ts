export class Negociacao {
    //em vez de declara a variavel fora do construtor e dentro atribuir, podemos só declarar como parâmetro no construtor
    //é necessário colocar o modificador (private, public ou protected)
    //essa atribuição, por de baixo dos panos, é feito pelo typescript

    //se eu tiver uma propriedade que não faz parte do constructor posso declarar normalmente 
    //private name = "Andressa"
    
    constructor(private _data:Date, private _quantidade:number, private _valor:number){ }

    get data():Date{
        return this._data;
    }
    get quantidade():number{
        return this._quantidade;
    }
    get valor():number{
        return this._valor;
    }
    get volume():number{
        return this._quantidade * this._valor;
    }
}