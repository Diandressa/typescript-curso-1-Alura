//Generics, esperamos na classe o tipo para mandar para os métodos
export abstract class View<T>{
    protected elemento:HTMLElement;
    private escapar = false;

    //ao definir um novo parâmetro quebramos o código nos outros arquivos, que estão mandando um parâmetro em vez dois, por isso queremos que ele seja opcional
    constructor(seletor:string, escapar: boolean){
        this.elemento = document.querySelector(seletor);
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