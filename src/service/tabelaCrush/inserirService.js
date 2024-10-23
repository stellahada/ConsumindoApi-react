import { inserir } from '../../repository/tabelaCrush.js'
import validarInsercao from '../../validation/tabelaCrush/inserirValidation.js';


export default async function inserirService(pessoa) {
    validarInsercao(pessoa);

    let id = await inserir(pessoa);
    return id;
}

