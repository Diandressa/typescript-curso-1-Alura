import { Negociacao } from "../models/negociacao.js";
export class NegociacaoController {
    constructor() {
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
    }
    adiciona() {
        //criar uma data com base ne string .value, passada no input
        //passamos a data recebido do value, porém a data recebida vem com hífen 1111-11-11
        //expressão regular para substituir os hífen por vírgula
        const exp = /-/g;
        //o replace substitui a expressão regular que pega todos os hífens pela vírgula
        const date = new Date(this.inputData.value.replace(exp, ','));
        //converter a quantidade
        const quantidade = parseInt(this.inputQuantidade.value);
        //converter o valor
        const valor = parseFloat(this.inputQuantidade.value);
        const negociacao = new Negociacao(date, quantidade, valor);
        /*
        const negociacao = new Negociacao(
            //todo input.value retorna uma string, isso da conflito na tipagem, precisamos converter
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value
        )
        */
        console.log(negociacao);
    }
}
