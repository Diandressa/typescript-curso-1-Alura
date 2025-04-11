//Generics, esperamos na classe o tipo para mandar para os métodos
export abstract class View<T>{
    protected elemento:HTMLElement;

    constructor(seletor:string){
        this.elemento = document.querySelector(seletor);
    }

    //toda classe abstrata pode ter um método abstrato
    //metodo abstrato  é implementado pela classe filha, só preciso definir ele e a classe filha implementa a lógica

    //abstract no método força a classe filha a declarar esse método
    //podemos usar o abstract quando queremos obrigar a classe filha a retornar um valor dela própria
    abstract template(model:T):string;

    //se eu não tiver retorno de negociacoes-view e mensagem -view ele lança um erro
    //o erro acontece em runtime, só no console do navegador
    //queremos que aconteça em tempo de desenvolvimento, pra uso usamos o método abstrato
    

    update(model:T):void{
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}