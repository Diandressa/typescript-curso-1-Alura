//colocar js no final da importação
import { NegociacaoController } from "./controllers/negociacao-controller.js";

const controller = new NegociacaoController()

const form = document.querySelector(".form");

if(form){
    //se form não for null ele chama o adventListener
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.adiciona();
    })
} else {
    throw Error('Não foi possível inicializar a aplicação. Verifique se o form existe')
}



//não faz sentido instancia a classe View pq ele é um modelo a ser herdado. Ela sozinha é incompleta, precisa da classe filha para definir os tipos e template
//por isso ela será abstrata
//const view = new View('seletor')

//essa variável pode ser string ou number
//const x:string | number = 10
