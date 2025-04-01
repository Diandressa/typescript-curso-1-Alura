import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";

export class NegociacaoController {
    private inputData:HTMLInputElement
    private inputQuantidade:HTMLInputElement
    private inputValor:HTMLInputElement
    //private negociacoes:Negociacoes;
    //vamos instancia o elemento já, não precisa do tipo quando declaro um valor 
    private negociacoes = new Negociacoes;

    constructor(){
        this.inputData = document.querySelector("#data")
        this.inputQuantidade = document.querySelector("#quantidade")
        this.inputValor = document.querySelector("#valor")
    }

    //retorna vazio
    adiciona():void{
        const negociacao = this.criaNegociacao();

        //não posso atribuir um novo valor para readonly
        //negociacao.data = new Date();

        //porém ainda podemos alterar com métodos do js, altera a data para dia 12
        //o readonly só não deixa atribuir, mas permite manipular com metodos/funcoes js
        // com o get também dá o mesmo problema

        //com o getDate na model, o setDate compila mas no navegador não altera a data
        //isso se chama programação defensiva
        negociacao.data.setDate(12)

        //adicionar na lista negociacoes
        this.negociacoes.adiciona(negociacao);        

        //imprime a lista no console
        const negociacoesLista = this.negociacoes.lista()
        console.log(negociacoesLista)

        //limpa o form
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