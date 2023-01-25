function contar()
{
    var inicio = document.getElementById('iinicio')
    var fim = document.getElementById('ifim')
    var passos = document.getElementById('ipassos')
    var res = document.getElementById('res')
    if(passos <= 0)
    {
        alert('Passo invalido!')
        p = 1
    }
    if(inicio.value.length == 0 || fim.value.length == 0 || passos.value.length == 0)
    {
        alert('ERRO! faltam dados')
    }
    else
    {
        res.innerHTML = 'Contando...'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passos.value)

        for( c = i ; c <= f ; c=+p )
        {
            res.innerHTML += `${c}`
        }

    }

}