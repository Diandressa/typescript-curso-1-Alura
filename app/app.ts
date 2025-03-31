//colocar js no final da importação
import { NegociacaoController } from "./controllers/negociacao-controller.js";

const controller = new NegociacaoController()

const form = document.querySelector(".form");

//Pegar o formulário, quando o form for submetido ele chama a função adiciona() do controller
//Podemos escreve event ou (event: Event), é um parâmetro do tipo Event
form.addEventListener('submit', event => {
    event.preventDefault();
    controller.adiciona();
})
