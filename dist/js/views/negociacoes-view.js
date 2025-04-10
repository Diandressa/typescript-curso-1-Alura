export class NegociacoesView {
    //seletor espera o id da index.html
    constructor(seletor) {
        //coloca o seletor na var elemento, que defini no construtor
        this.elemento = document.querySelector(seletor);
    }
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
                            <td>${new Intl.DateTimeFormat().format(negociacao.data)}</td>
                            <td>${negociacao.quantidade}</td>
                            <td>${negociacao.valor}</td>
                        </tr>
                        `;
        }).join('')}
                    <!-- o map converte cada objeto da lista em uma array de strings, depois, o join, junta as string tendo como separador o espaço-->
                </tbody>
                
            </table>
        `;
    }
    //metodo para atualizar o template
    //recebe a model do controller no metodo update, que é a nossa lista/array - controller negociacoes instanciado
    update(model) {
        //Sobrescreve no DOM o modelo criado em template() - renderiza esse elemento dentro de this.elemento, ou seja, dentro da div com id negociacoesView
        const template = this.template(model);
        console.log(template);
        //passa para o modelo
        //this.elemento.innerHTML = this.template(model);
        this.elemento.innerHTML = template;
    }
}
