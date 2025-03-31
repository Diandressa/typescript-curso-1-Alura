import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    //array do tipo Negociacao. Posso declarar uma classe como um tipo
    private negociacoes:Array<Negociacao> = [];

    //adiciona uma negociacao em uma lista negociacoes 
    adiciona(negociacao:Negociacao){
        this.negociacoes.push(negociacao)
    }

    //Para imprimir a lista
    lista(): Array<Negociacao>{
        //precisamos fazer uma copia da lista original, para não chamar ou alterar a original
        // o operador spread pega cada item da lista original e coloca nessa cópia
        return [...this.negociacoes];
    }
}

//instancia a lista
const negociacoes = new Negociacoes();

//adiciona a lista instanciando uma negociacao
//negociacoes.adiciona(new Negociacao())


