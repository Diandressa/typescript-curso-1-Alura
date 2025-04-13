export enum DiasDaSemana {
    DOMINGO = 0,
    SEGUNDA = 1,
    TERCA = 2,
    QUARTA = 3,
    QUINTA = 4,
    SEXTA = 5,
    SABADO = 6
}

//typescript por padrão coloca o valor da enum em ordem numérica, ele organiza pela posição que coloquei, porém não é recomendado deixar padrão. Devemos explicitar os valores para nâo ter problema ao mexer na posição/ordem declarada

//Enum é somente leitura por padrão, não podemos setar um valor diferente ao chamar ela