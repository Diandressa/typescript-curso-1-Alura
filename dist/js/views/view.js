//Generics, esperamos na classe o tipo para mandar para os métodos
export class View {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    //se eu não tiver retorno de negociacoes-view e mensagem -view ele lança um erro
    //o erro acontece em runtime, só no console do navegador
    //queremos que aconteça em tempo de desenvolvimento, pra uso usamos o método abstrato
    update(model) {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}
