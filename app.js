const { argv } = require('./config/yargs');
const colors = require('colors');
const { crear, getListado, actualizar, borrar } = require('./ToDo/todo');


let comando = argv._[0];

switch( comando ) {
    case 'crear':
        let todo = crear(argv.descripcion);
        console.log(todo);
        break;
    case 'listar':
        let listado = getListado();

        for (let t of listado) {
            console.log('========Por Hacer========'.green);
            console.log(t.descripcion);
            console.log('Estado: ', t.completado);
            console.log('========================='.green);

        }
        break;
    case 'actualizar':
        let actualizado = actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;

    case 'borrar':
        let borrado = borrar(argv.descripcion);
        break;
    default:
        console.log('Comando no reconocido.');
}