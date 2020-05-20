{
    {
        {
            var sera = 'Será???' //embora pareça que "var" esta dentro do bloco ela não esta e esta visível para todos.
            console.log(sera) // essa variável é global. no browse fica na variável windows
        }
    }
}
console.log(sera)
    // quando definido um escopo local, a variável não sera vista fora dele.
function teste() {
    var local = 123
    console.log(local)
}
teste()