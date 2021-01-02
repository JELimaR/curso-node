
const yrg = require('yargs');

const argv = yrg
        .command('crear', 'Crear un elemento ToDo', {
            descripcion: {
                demand: true,
                alias: 'd',
                desc: 'Descripcion de la tarea por hacer'
            }
        })
        .command('actualizar', 'Actualiza el estado completado de una tarea', {
            descripcion: {
                demand: true,
                alias: 'd',
                desc: 'Descripcion de la tarea por hacer'
            },
            completado: {
                alias: 'c',
                default: false,
                desc: 'Marca como cmpletada o pendiente la tarea'
            }
        })
        .command('borrar', 'Borrar un elemento de ToDo', {
            descripcion: {
                demand: true,
                alias: 'd',
                desc: 'Descripcion de la tarea por hacer'
            }
        })
        .help()
        .argv;

module.exports = {
    argv: argv
}