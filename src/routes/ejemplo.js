// exportar un modulo
module.exports = function rutas(app){
    app.get("/", function(req, res){
        res.json({mensaje: "Pagina Inicio rutas"})
    })

    app.get("/user", function(req, res){
        res.json({mensaje: "Pagina de usuario rutas"})
    })
}