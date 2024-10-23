import { listar } from "../../repository/tabelaCrush.js";

export default async function consultarService() {
    let registros = await listar();
    return registros;
}

