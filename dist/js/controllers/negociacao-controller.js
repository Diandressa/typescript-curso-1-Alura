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
        //retorna o dia da semnana de 0 a 6
        if (negociacao.data.getDay() > 0 && negociacao.data.getDay() < 6) {
            // entre 1 e 5, 0 é domingo e 6 sábado
            //adicionar na lista negociacoes
            this.negociacoes.adiciona(negociacao);
            //limpa o form
            this.limparFormulario();
            //atualiza view ao adicionar
            this.atualizaView();
            console.log(negociacao.data.getDay());
        }
        else {
            this.mensagemView.update("Apenas negociações em dias úteis são aceitas");
        }
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
