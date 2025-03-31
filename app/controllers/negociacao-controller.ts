import { Negociacao } from "../models/negociacao.js";

export class NegociacaoController {
    private inputData:HTMLInputElement
    private inputQuantidade:HTMLInputElement
    private inputValor:HTMLInputElement

    constructor(){
        this.inputData = document.querySelector("#data")
        this.inputQuantidade = document.querySelector("#quantidade")
        this.inputValor = document.querySelector("#valor")
    }

    adiciona(){
        const negociacao = new Negociacao(
            //todo input.value retorna uma string, isso da conflito na tipagem, precisamos converter 
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value
        )

        console.log(negociacao)
    }
}