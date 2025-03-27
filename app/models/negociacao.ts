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
    #data: Date;
    #quantidade:number;
    #valor:number;

    constructor(data:Date, quantidade:number,valor:number){
        this.#data = data;
        this.#quantidade = quantidade;
        this.#valor = valor;
    }

    get data(){
        return this.#data;
    }
    get quantidade(){
        return this.#quantidade;
    }
    get valor(){
        return this.#valor;
    }
    get volume(){
        return this.#quantidade * this.#valor;
    }
}