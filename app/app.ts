//colocar js no final da importação
import { NegociacaoController } from "./controllers/negociacao-controller.js";

const controller = new NegociacaoController()

const form = document.querySelector(".form")!;

//Pegar o formulário, quando o form for submetido ele chama a função adiciona() do controller
//Podemos escreve event ou (event: Event), é um parâmetro do tipo Event
form.addEventListener('submit', event => {
    event.preventDefault();
    controller.adiciona();
})

//não faz sentido instancia a classe View pq ele é um modelo a ser herdado. Ela sozinha é incompleta, precisa da classe filha para definir os tipos e template
//por isso ela será abstrata
//const view = new View('seletor')

//essa variável pode ser string ou number
//const x:string | number = 10
