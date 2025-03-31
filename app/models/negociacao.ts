// O # é o private em javascript
export class Negociacao {
    //typescript consegue entender qual o tipo da variável pelo passado no constructor, mas para ficar claro colocamos os tipo aqui tb
    private _data:Date;
    private _quantidade:number;
    private _valor:number;

    constructor(data:Date, quantidade:number, valor:number){
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }

    //O get não pode ter o mesmo nome de uma propriedade da classe, usamos _nomevarivel como convenção

    get data(){
        return this._data;
    }
    get quantidade(){
        return this._quantidade;
    }
    get valor(){
        return this._valor;
    }
    get volume(){
        return this._quantidade * this._valor;
    }
}