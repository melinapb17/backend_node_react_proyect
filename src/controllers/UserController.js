module.exports = {
    listar(req, res){ //funcion simple
        res.json({mensaje: "Lista de usuarios"})
    },
    guardar: function(req, res){  // funcion anonima

    }, 
    mostrar: (req, res) => {    //funcion flecha
        res.json({mensaje: "Mostrando..."+req.params.id})
    },
    modificar: (req, res) => {    //funcion flecha

    },
    eliminar: (req, res) => {    //funcion flecha

    }
}