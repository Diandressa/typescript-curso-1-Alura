import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
    private inputData:HTMLInputElement
    private inputQuantidade:HTMLInputElement
    private inputValor:HTMLInputElement

    private negociacoes = new Negociacoes;

    //passa o seletor do index.html para o construtor de negociacoes-view
    private negociacoesView = new NegociacoesView('#negociacoesView');

    private mensagemView = new MensagemView("#mensagemView");

    constructor(){
        this.inputData = document.querySelector("#data")
        this.inputQuantidade = document.querySelector("#quantidade")
        this.inputValor = document.querySelector("#valor")
        //chama o update trazendo o template e colocando na div assim que a página carrega e construo o objeto
        this.negociacoesView.update(this.negociacoes)
    }

    //retorna vazio
    adiciona():void{
        const negociacao = this.criaNegociacao();
        
        //com o getDate na model, o setDate compila mas no navegador não altera a data
        //isso se chama programação defensiva
        negociacao.data.setDate(12)

        //adicionar na lista negociacoes
        this.negociacoes.adiciona(negociacao);  
        
        //depois de adicionar o item na lista eu chamo o update na view
        this.negociacoesView.update(this.negociacoes)

        //mensagem após adicionar
        this.mensagemView.update("Negociações adicionada com sucesso");

        //imprime a lista no console
        //const negociacoesLista = this.negociacoes.lista()
        //console.log(negociacoesLista)

        //limpa o form
        this.limparFormulario();
    }

    //retorna tipo Negociacao
    criaNegociacao():Negociacao{
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value)
        const valor = parseFloat(this.inputValor.value)

        return new Negociacao(date, quantidade,valor)
    }

    limparFormulario():void{
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
}