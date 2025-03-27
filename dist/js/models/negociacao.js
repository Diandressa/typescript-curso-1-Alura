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
    #data;
    #quantidade;
    #valor;

    constructor(data, quantidade,valor){
        this.#data = data;
        this.#quantidade = quantidade;
        this.#valor = valor;
    }

    get dataGet(){
        return this.#data;
    }
    get quantidadeGet(){
        return this.#quantidade;
    }
    get valorGet(){
        return this.#valor;
    }
    get volumeGet(){
        return this.#quantidade * this.#valor;
    }
}