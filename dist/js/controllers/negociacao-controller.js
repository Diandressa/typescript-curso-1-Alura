import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes;
        //passa o seletor do index.html para o construtor de negociacoes-view
        this.negociacoesView = new NegociacoesView('#negociacoesView');
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
        //chama o update trazendo o template e colocando na div assim que a página carrega
        this.negociacoesView.update();
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
