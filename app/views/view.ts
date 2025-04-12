//Generics, esperamos na classe o tipo para mandar para os métodos
export abstract class View<T>{
    protected elemento:HTMLElement;

    constructor(seletor:string){
        this.elemento = document.querySelector(seletor);
    }
    //protected para só as filhas acessar esse método, preciso declarar protected na classe filha tb, pq a classe filha sobescreve a pai
    protected abstract template(model:T):string;
    
    update(model:T):void{
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}