let valores = [0,1,7,4,2,9,20,54,90,100]

/*for(let posição=0; posição < valores.length; posição++ )
{
    console.log(`A posição ${posição} tem o valor ${valores[posição]}`)
} */ 

for(let posição in valores) // MANEIRA MAIS SIMPLIFICADA
{
    console.log(` o indice ${posição} tem o valor ${valores[posição]}`)
}

