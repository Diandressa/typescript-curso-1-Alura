import { Negociacao } from "./negociacao.js";

export class Negociacoes {

    //private negociacoes:Array<Negociacao> = []; ou como na linha abaixo
    private negociacoes:Negociacao[] = [];

    adiciona(negociacao:Negociacao){
        this.negociacoes.push(negociacao)
    }

    //lista(): ReadonlyArray<Negociacao>{} ou
    lista(): readonly Negociacao[]{
        return [...this.negociacoes];
    }
}

//instancia a lista
const negociacoes = new Negociacoes();


