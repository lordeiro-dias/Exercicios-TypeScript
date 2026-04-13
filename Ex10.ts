/*Crie um tipo Produto com:
nome (string)
preco (number)
emPromocao (boolean)
Crie uma função calcularPrecoFinal que:
recebe um produto
se estiver em promoção → aplica 10% de desconto
retorna o preço final
*/

type Produto = {
    nome: string;
    preco: number;
    emPromocao: boolean;
}

const item: Produto = {nome: "Mouse", preco: 144.99, emPromocao: false}

function calcularPrecoFinal(p: Produto)
{
    let precoAnterior: number = p.preco;

    if(p.emPromocao)
    {
        p.preco = p.preco * 0.9;
        return `Nome do produto: ${p.nome}, promoção: 10%, preço padrão: ${precoAnterior}, preço final: ${p.preco}`;
    }

    else
    {
        return `Nome do produto: ${p.nome}, promoção: nenhuma, preço final: ${p.preco}`;
    }
}

console.log(calcularPrecoFinal(item));