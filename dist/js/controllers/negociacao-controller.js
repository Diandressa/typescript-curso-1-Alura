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
        //adicionar na lista negociacoes
        this.negociacoes.adiciona(negociacao);
        //this.negociacoes.lista().pop();
        //com o spread no metodo lista() em negociacoes, o pop afeta a copia da lista e não a original.
        //O operador pop() na cópia não afeta a lista original. 
        /*
        Impressão da lista com console.log(this.negociacoes.lista()): Como a lista é copiada dentro do método lista(), o que você está imprimindo é a cópia da lista. Mesmo que você tenha usado pop() na cópia, a lista original não foi alterada.
        */
        //imprime a lista no console
        console.log(this.negociacoes.lista());
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
