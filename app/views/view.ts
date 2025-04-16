//Generics, esperamos na classe o tipo para mandar para os métodos
export abstract class View<T>{
    protected elemento:HTMLElement;
    private escapar = false;

    //ao definir um novo parâmetro quebramos o código nos outros arquivos, que estão mandando um parâmetro em vez dois, por isso queremos que ele seja opcional
    //? - diz que é um parâmetro opcional, pode ser passado ou não
    //erro seletor?:string, escapar: boolean -> um parâmetro obrigatório não pode ser depois de um opcional, o opcional tem que ser o último
    //erro seletor:string, escapar?: boolean, teste:boolean -> os opcionais tem que ser o último
    //correto seletor:string, escapar?: boolean, teste?:boolean -> os opcionais tem que ser o último

    //se ele não passou nada então recebe undefined
    constructor(seletor:string, escapar?: boolean){
        const elemento = document.querySelector(seletor);
        if (elemento){
            //se elemento não for null ele coloca na variável this.elemento e defini ele como HTMLElement
            this.elemento = elemento as HTMLElement
        } else {
            throw Error(`Seletor ${seletor} não existe no DOM. Verifique com desenvolvedor`)
        }


        //mudar o valor de escapar para true e eu passo true, se for verdadeiro ele coloca o valor que passei na variável
        //se for undefined ele atribui o valor false(valor que passei), se for true ele atribui o valor true(valor que passei)
        if(escapar){
            this.escapar = escapar;
        }
    }
    //protected para só as filhas acessar esse método, preciso declarar protected na classe filha tb, pq a classe filha sobescreve a pai
    protected abstract template(model:T):string;
    
    public update(model:T):void{
        let template = this.template(model);
        //lógica para remover script maliciosos
        //se escapar tiver um script, se ele for true

        //definimos escapar como false, para podemos aticar ou desativar usando boolean
        //se colocamos true ativa, e se colocarmos false desativa
        if(this.escapar){
            //substitui a tag <script></script> por string vazia
            template = template.replace(/<script>[\s\S]*?<\/script>/, '')
        }
        this.elemento.innerHTML = template;
    }
}