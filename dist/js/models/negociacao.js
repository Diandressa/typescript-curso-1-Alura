// export class Negociacao {
//     constructor(
//         private _data: Date, 
//         public readonly quantidade: number, 
//         public readonly valor: number
//     ) {}
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _data, _quantidade, _valor;
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
    constructor(data, quantidade, valor) {
        _data.set(this, void 0);
        _quantidade.set(this, void 0);
        _valor.set(this, void 0);
        __classPrivateFieldSet(this, _data, data);
        __classPrivateFieldSet(this, _quantidade, quantidade);
        __classPrivateFieldSet(this, _valor, valor);
    }
    get data() {
        return __classPrivateFieldGet(this, _data);
    }
    get quantidade() {
        return __classPrivateFieldGet(this, _quantidade);
    }
    get valor() {
        return __classPrivateFieldGet(this, _valor);
    }
    get volume() {
        return __classPrivateFieldGet(this, _quantidade) * __classPrivateFieldGet(this, _valor);
    }
}
_data = new WeakMap(), _quantidade = new WeakMap(), _valor = new WeakMap();
