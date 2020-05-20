/* As regras para o cálculo dos anos bissextos são as seguintes:
De 4 em 4 anos é ano bissexto;
De 100 em 100 anos não é ano bissexto;
De 400 em 400 anos é ano bissexto;
Prevalecem as últimas regras sobre as primeiras.
Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
mensagem e retornando true ou false.*/

function anoBissexto(bissexto) {
    if (bissexto % 400 == 0) {
        return true
    } else if (bissexto % 100 == 0) {
        return false
    } else if (bissexto % 4 == 0) {
        return true
    } else {
        return false
    }
}
console.log(anoBissexto(0))
console.log(anoBissexto(1))
console.log(anoBissexto(100))
console.log(anoBissexto(400))
console.log(anoBissexto(2000))
console.log(anoBissexto(2020))
console.log(anoBissexto(2022))
console.log(anoBissexto(2068))
console.log(anoBissexto(2030))

//Método do Professor