import { Negociacao } from "./negociacao.js";

export class Negociacoes {

    //private negociacoes:Array<Negociacao> = []; ou como na linha abaixo
    private negociacoes:Negociacao[] = [];

    public adiciona(negociacao:Negociacao){
        this.negociacoes.push(negociacao)
    }

    //lista(): ReadonlyArray<Negociacao>{} ou
    public lista(): readonly Negociacao[]{
        return [...this.negociacoes];
    }
}



