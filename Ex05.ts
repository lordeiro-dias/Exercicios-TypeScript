//Crie uma função saudacao que recebe um nome opcional e retorna:
//"Olá, visitante" se não tiver nome
//"Olá, [nome]" se tiver

function saudacao(nome: string)
{
    if(nome)
    {
       return `Olá, ${nome}`; 
    }

    return "Olá, visitante";
}

console.log(saudacao("Thiago"))
console.log(saudacao(""))