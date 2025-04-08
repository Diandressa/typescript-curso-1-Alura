export class NegociacoesView {
    //seletor espera o id da index.html
    constructor(seletor) {
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
}
