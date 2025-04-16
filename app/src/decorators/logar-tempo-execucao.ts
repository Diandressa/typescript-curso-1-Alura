export function logarTempoDeExecucao(){
    return function(
        target:any,
        propertyKey:string,
        descriptor:PropertyDescriptor
    ) {
        //guardar comportamento original do método
        const metodoOriginal = descriptor.value;

        //modificar o método original
        descriptor.value = function(){

            //aplicar a alteração desejada
            const t1 = performance.now();

            //chamar o método original aqui
            //Preciso passar os parâmetros que foram passados para o método original aqui tb
            const retorno = metodoOriginal();

            const t2 = performance.now();
            //propriedadeKey é o nome do método
            console.log(`${propertyKey}: tempo de execução: ${(t2-t1)/1000} segundos`);

            //chama retorno para retornar o novo método criado, sobreescreve o método original
            retorno;
        }
        return descriptor;
    }
}