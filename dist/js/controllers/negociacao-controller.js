import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes;
        //passa o seletor do index.html para o construtor de negociacoes-view
        this.negociacoesView = new NegociacoesView('#negociacoesView');
        this.mensagemView = new MensagemView("#mensagemView");
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
        //chama o update trazendo o template e colocando na div assim que a página carrega e construo o objeto
        this.negociacoesView.update(this.negociacoes);
    }
    //retorna vazio
    adiciona() {
        const negociacao = this.criaNegociacao();
        if (!this.diaUtil(negociacao.data)) {
            //se ele não é dia útil da erro
            this.mensagemView.update("Apenas negociações em dias úteis são aceitas");
            return;
        }
        this.negociacoes.adiciona(negociacao);
        //limpa o form
        this.limparFormulario();
        //atualiza view ao adicionar
        this.atualizaView();
        console.log(negociacao.data.getDay());
    }
    diaUtil(data) {
        //negociacao.data.getDay() > this.DOMINGO && negociacao.data.getDay() < this.SABADO
        return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO;
    }
    //retorna tipo Negociacao
    criaNegociacao() {
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, quantidade, valor);
    }
    limparFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
    atualizaView() {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update("Negociações adicionada com sucesso");
    }
}
