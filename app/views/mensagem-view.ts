import { View } from "./view.js";

//passa o tipo quando extende a View, mando esse tipo para classe View<>
export class MensagemView extends View<string>{
    //herdar de View.ts os códigos iguais, herdar com extends na classe

    //herdar template de View e enviar um retorno para lá
    //com abstract template sou obrigada a definir o template, se não o código da erro e não compila
    protected template(model:string):string{
        return `
            <p class="alert alert-info">${model}</p>
        `
    }

    //herdar método update do classe View
    
}