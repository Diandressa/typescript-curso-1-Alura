import { View } from "./view.js";
//passa o tipo quando extende a View, mando esse tipo para classe View<>
export class NegociacoesView extends View {
    //herdar de View.ts os códigos iguais, herdar com extends na classe
    //herdar template de View e enviar um retorno para lá
    //template espera uma string no view.ts, não o tipo Negociacoes
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
    //Alguns navegadores tem proteção contra scripts passados no console de forma maliciosa, porém devemos implementar esse segurança a mais no nosso código tb.
    //Caso apareça um script no nosso template devemos remove-lo
    //Só acesso esse método nessa classe, nem nas filhas posso acessar
    formatar(data) {
        return new Intl.DateTimeFormat().format(data);
    }
}
