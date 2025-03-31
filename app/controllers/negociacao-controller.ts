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

    //retorna vazio
    adiciona():void{
        const negociacao = this.criaNegociacao();
        console.log(negociacao)
        this.limparFormulario();
    }

    //retorna tipo Negociacao
    criaNegociacao():Negociacao{
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value)
        const valor = parseFloat(this.inputQuantidade.value)

        return new Negociacao(date, quantidade,valor)
    }

    limparFormulario():void{
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
}