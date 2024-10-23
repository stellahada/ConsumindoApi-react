
export default function validarInsercao(pessoa) {
    if (!pessoa.nome) throw new Error('Nome é obrigatório');
    if (!pessoa.desde) throw new Error('Desde é obrigatório');
    if (pessoa.namorando == undefined) throw new Error('Namorando é obrigatório');
    if (pessoa.reciproco == undefined) throw new Error('Reciproco é obrigatório');
    if (!pessoa.presente) throw new Error('Valor do presente é obrigatório');
}

