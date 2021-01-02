
const fs = require('fs');



let listTodo = [];

const guardarDB = () => {

    let data = JSON.stringify(listTodo);

    fs.writeFile('./db/data.json', data, (err) => {
        if (err) throw err;
    });
}

const cargarDB = () => {

    try {
        listTodo = require('../db/data.json');
    } catch (error) {
        listTodo = [];
    }    
}



const crear = (desc) => {

    cargarDB();

    let todo = {
        descripcion: desc,
        completado: false
    };

    listTodo.push(todo);

    guardarDB();

    return todo;
}

const getListado = () => {
    cargarDB();

    return listTodo;
}

const actualizar = (descripcion, completado = false) => {
    cargarDB();
    let index = listTodo.findIndex( tarea => tarea.descripcion === descripcion)

    if (index >= 0 ) {
        listTodo[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {
    
    cargarDB();
    let nuevaList = listTodo.filter(t => { // puede ser como el otro
        return t.descripcion !== descripcion
    });

    if ( listTodo.length === nuevaList.length) {
        return false;
    } else {
        listTodo = nuevaList;
        guardarDB();
        return true;
    }
    


}

module.exports = {
    crear: crear,
    getListado: getListado,
    actualizar: actualizar,
    borrar: borrar
}