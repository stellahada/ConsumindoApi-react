import listaNegra from './controller/listaNegraController.js'



export default function adicionarRotas(servidor) {
    servidor.use(listaNegra);
}