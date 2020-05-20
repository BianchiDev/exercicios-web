class Lancamento {
    constructor(nome = 'Genérico', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}
class CiscloFinaceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.Lancamentos = []
    }

    addLancamentos(...Lancamentos) {
        Lancamentos.forEach(L => this.Lancamentos.push(L))
    }

    sumario() {
        let valorConsolidado = 0
        this.Lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salario', 45000)
const contaDeLuiz = new Lancamento('Luz', -220)

const contas = new CiscloFinaceiro(6, 2018)
contas.addLancamentos(salario, contaDeLuiz)
console.log(contas.sumario())