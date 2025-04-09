export class NegociacoesView {
    //guardar o elemento do DOM que peguei
    private elemento: HTMLElement

    //seletor espera o id da index.html
    constructor(seletor: string){
        //coloca o seletor na var elemento, que defini no construtor
        this.elemento = document.querySelector(seletor) as HTMLElement;
    }

    template():string {
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
    update():void{
        //Sobrescreve no DOM o modelo criado em template() - renderiza esse elemento dentro de this.elemento, ou seja, dentro da div com id negociacoesView
        this.elemento.innerHTML = this.template();
    }
}