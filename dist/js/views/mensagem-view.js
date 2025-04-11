import { View } from "./view.js";
//passa o tipo quando extende a View, mando esse tipo para classe View<>
export class MensagemView extends View {
    //herdar de View.ts os códigos iguais, herdar com extends na classe
    //herdar template de View e enviar um retorno para lá
    template(model) {
        return `
            <p class="alert alert-info">${model}</p>
        `;
    }
}
