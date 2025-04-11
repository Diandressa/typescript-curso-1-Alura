import { View } from "./view.js";

export class MensagemView extends View{
    //herdar de View.ts os códigos iguais, herdar com extends na classe

    //herdar template de View e enviar um retorno para lá
    template(model:string):string{
        return `
            <p class="alert alert-info">${model}</p>
        `
    }

    //herdar método update do classe View
    
}