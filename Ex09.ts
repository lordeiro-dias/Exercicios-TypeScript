/*Crie uma função mostrarAluno que recebe um Aluno e retorna:
"Nome: X, Idade: Y" */

type Aluno1 = {
    nome: string;
    idade: number;
}

const alunoA1: Aluno1 = {nome: "pablo", idade: 20}

function mostrarAluno(alunoB: Aluno1)
{
    return `Nome: ${alunoB.nome}, Idade: ${alunoB.idade}`;
}

console.log(mostrarAluno(alunoA1));