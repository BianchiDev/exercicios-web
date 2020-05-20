function teste1(num) {
    if (num > 7) // estrutura de controle "if" e estrutura relacional ">".
        console.log(num)
    console.log('Final')

}

teste1(6)
teste1(8)

function teste2(num) {
    if (num > 7); { // cuidado com o ';', não usar com as estruturas de controle "if"
        console.log(num)
    }
}
teste2(6)
teste2(8)