const schedule = require('node-schedule')
    // executi de 5 em 5 segundo  as 12 horas de uma quinta feira de qualquer mês "*/5*" de 5 em 5 segundos, "*12" 12 horas  "* * " dia e Mês "4" quinta.
const tarefa1 = schedule.scheduleJob('*/5 * 12 * * 4', function() {
    console.log('Executando Tarefa 1!', new Date().getSeconds())
})


setTimeout(function() {
        tarefa1.cancel()
        console.log('Cacelamento Tarefa1!')
    }, 20000) // otemporizador setTimeout espera 20 segundos para cancelar a function tarefa1

const regra = new schedule.RecurrenceRule()
regra.day0fweek = [new schedule.Range(1, 5)]
regra.hour = 12 // horas
regra.second = 16 // minutos
    // Vai disparar às 12h e 16 mim de segunda a sexta.

const tarefa2 = schedule.scheduleJob(regra, function() {
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})