//Generics, esperamos na classe o tipo para mandar para os métodos
export class View {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    template(model) {
        //se eu não tiver retorno de negociacoes-view e mensagem -view ele lança um erro
        throw Error('Classe filha precisa implementar o  método template');
    }
    update(model) {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}
