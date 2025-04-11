//Generics, esperamos na classe o tipo para mandar para os métodos
export class View<T>{
    protected elemento:HTMLElement;

    constructor(seletor:string){
        this.elemento = document.querySelector(seletor);
    }

    template(model:T):string{
        //se eu não tiver retorno de negociacoes-view e mensagem -view ele lança um erro
        throw Error('Classe filha precisa implementar o  método template');
    }

    update(model:T):void{
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}