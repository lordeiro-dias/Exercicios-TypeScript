/* Crie uma função formatarId que aceita number ou string e retorna uma string formatada:
"ID: valor"
*/

function formatarId(ids: number | string)
{
    return `Id: ${ids}`;
}

console.log(formatarId("30"))