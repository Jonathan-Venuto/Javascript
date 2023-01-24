function verificar()
{
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('iano')
    var res = document.querySelector('div.resultado')
    if(fano.value.length == 0 || fano > ano)
    {
        alert('Verifique os dados e tente novamente!')
    }
    else
    {
        var fsex = document.getElementsByName('sx')
        var idade = ano - Number(fano.value)
        var genero = ''
        if(fsex[0].checked)
        {
            genero = 'Homem'
        }
        else if(fsex[1].checked)
        {
            genero = 'Mulher'
        }

        res.innerHTML = `${genero} de ${idade} anos de idade.`

        
        
    }
}