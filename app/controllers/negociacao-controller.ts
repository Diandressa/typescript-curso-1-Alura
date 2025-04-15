import { DiasDaSemana } from "../enums/dias-da-semana.js";
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
    public adiciona():void{
        //preciso instanciar com valores fictícios, para depois sobrepor com os do form
        const negociacaoTemp = new Negociacao(null, 0, 0)

        //passa o value do inputs para a função
        const negociacao = negociacaoTemp.criaDe(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value
        );

        if(!this.diaUtil(negociacao.data)){
            //se ele não é dia útil da erro
            this.mensagemView.update("Apenas negociações em dias úteis são aceitas");
            return;
        }
            
        this.negociacoes.adiciona(negociacao);  

        //limpa o form
        this.limparFormulario();

        //atualiza view ao adicionar
        this.atualizaView();

        console.log(negociacao.data.getDay())
    
    }

    private diaUtil(data: Date){
        //negociacao.data.getDay() > this.DOMINGO && negociacao.data.getDay() < this.SABADO
        return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO
    }

    private limparFormulario():void{
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }

    private atualizaView():void{
        this.negociacoesView.update(this.negociacoes)
        this.mensagemView.update("Negociações adicionada com sucesso");
    }
}