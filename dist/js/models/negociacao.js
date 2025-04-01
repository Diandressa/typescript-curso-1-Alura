export class Negociacao {
    //em vez de declara a variavel fora do construtor e dentro atribuir, podemos só declarar como parâmetro no construtor
    //é necessário colocar o modificador (private, public ou protected)
    //essa atribuição, por de baixo dos panos, é feito pelo typescript
    //se eu tiver uma propriedade que não faz parte do constructor posso declarar normalmente 
    //private name = "Andressa"
    constructor(_data, _quantidade, _valor) {
        this._data = _data;
        this._quantidade = _quantidade;
        this._valor = _valor;
    }
    get data() {
        return this._data;
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }
    get volume() {
        return this._quantidade * this._valor;
    }
}
