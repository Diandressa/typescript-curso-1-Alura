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
    //true aplica a lógica de impedir script malicioso, a lógica está em view.ts, segundo parâmetro definimos como opcional
    private negociacoesView = new NegociacoesView('#negociacoesView', true);
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
        //passa o value do inputs para a função
        /*
        const negociacao = new Negociacao(null,0,0).criaDe(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value
        );
        */

        //quero criar um método que possa ser acessado independente de ser instanciado ou não, ainda dentro da classe Negociação
        //método que acessamos diretamente na classe, sem precisar instanciar a classe -> usamos o static na classe Negociacao
        const negociacao = Negociacao.criaDe(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value
        );

        //Não consigo acessar pela variável, só diretamente pela classe Negociacao
        //negociacao.

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