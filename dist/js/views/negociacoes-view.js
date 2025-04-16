import { View } from "./view.js";
export class NegociacoesView extends View {
    template(model) {
        return `
            <table class="table table-hover table-bordered">

                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                    </tr>
                </thead>
                
                <tbody>
                    <!-- Chama o método lista, que retorna o array e percorre o array com map-->
                    <!-- O map retorna um array com a lista de strings-->
                    ${model.lista().map(negociacao => {
            return `
                        <tr>
                            <!-- date, considera a localidade do navegador atual e  formata ao exibir na tela-->
                            <td>${this.formatar(negociacao.data)}</td>
                            <td>${negociacao.quantidade}</td>
                            <td>${negociacao.valor}</td>
                        </tr>
                        <!-- <script>alert('oi')</script> -->
                        `;
        }).join('')}
                    <!-- o map converte cada objeto da lista em uma array de strings, depois, o join, junta as string tendo como separador o espaço-->
                </tbody>
                
            </table>
        `;
    }
    formatar(data) {
        return new Intl.DateTimeFormat().format(data);
    }
}
