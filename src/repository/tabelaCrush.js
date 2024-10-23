import con from "./connection.js";


export async function inserir(pessoa) {
    const comando = `
        insert into tb_crush (nm_pessoa, dt_desde date, bt_namorando, bt_reciproco,vl_presente),
					        values (?, ?, ?, ?, ?)
    `

    let [info] = await con.query(comando, [pessoa.nome, pessoa.desde, pessoa.namorando, pessoa.reciproco, pessoa.presente]);
    return info.insertId;
}




export async function listar() {
    const comando = `
        select id_lista_negra       id,
               nm_pessoa            nome,
               dt_desde             desde,
               bt_namorando         namorando,
               bt_reciproco         reciproco,
               vl_presente          presente
          from tb_lista_negra
    `

    let [registros] = await con.query(comando);
    return registros;
}


