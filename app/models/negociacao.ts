// export class Negociacao {
//     constructor(
//         private _data: Date, 
//         public readonly quantidade: number, 
//         public readonly valor: number
//     ) {}

//     get volume(): number {
//         return this.quantidade * this.valor;
//     }

//     get data(): Date {
//         const data = new Date(this._data.getTime());
//         return data;
//     }
// }

// export class Negociacao {
//     constructor(_data, quantidade, valor) {
//         this._data = _data;
//         this.quantidade = quantidade;
//         this.valor = valor;
//     }
//     get volume() {
//         return this.quantidade * this.valor;
//     }
//     get data() {
//         const data = new Date(this._data.getTime());
//         return data;
//     }
// }

// O # é o private em javascript
export class Negociacao {
    private _data: Date;
    private _quantidade:number;
    private _valor:number;

    constructor(data:Date, quantidade:number,valor:number){
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