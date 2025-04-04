import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
export class NegociacaoController {
    constructor() {
        //private negociacoes:Negociacoes;
        //vamos instancia o elemento já, não precisa do tipo quando declaro um valor 
        this.negociacoes = new Negociacoes;
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
    }
    //retorna vazio
    adiciona() {
        const negociacao = this.criaNegociacao();
        //com o getDate na model, o setDate compila mas no navegador não altera a data
        //isso se chama programação defensiva
        negociacao.data.setDate(12);
        //adicionar na lista negociacoes
        this.negociacoes.adiciona(negociacao);
        //imprime a lista no console
        const negociacoesLista = this.negociacoes.lista();
        console.log(negociacoesLista);
        //limpa o form
        this.limparFormulario();
    }
    //retorna tipo Negociacao
    criaNegociacao() {
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputQuantidade.value);
        return new Negociacao(date, quantidade, valor);
    }
    limparFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
}
