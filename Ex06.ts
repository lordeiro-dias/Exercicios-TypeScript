//Crie um array de números e uma função que retorna a soma deles.
let numeros: number[] = [1, 2, 3];

function soma (num: number[])
{
    let s: number = 0;

    for(let i: number = 1; i < num.length; i++)
    {
        s = s + num[i];
    }

    return s;
}
console.log(soma(numeros))