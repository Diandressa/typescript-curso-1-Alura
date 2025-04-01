export class Negociacoes {
    constructor() {
        //private negociacoes:Array<Negociacao> = []; ou como na linha abaixo
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    //lista(): ReadonlyArray<Negociacao>{} ou
    lista() {
        return [...this.negociacoes];
    }
}
//instancia a lista
const negociacoes = new Negociacoes();
