export class NegociacoesView {
    //seletor espera o id da index.html
    constructor(seletor) {
        //coloca o seletor na var elemento, que defini no construtor
        this.elemento = document.querySelector(seletor);
    }
    template() {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                    </tr>
                    <tbody>

                    </tbody>
                </thead>
            </table>
        `;
    }
    //metodo para atualizar o template
    update() {
        //Sobrescreve no DOM o modelo criado em template() - renderiza esse elemento dentro de this.elemento, ou seja, dentro da div com id negociacoesView
        this.elemento.innerHTML = this.template();
    }
}
