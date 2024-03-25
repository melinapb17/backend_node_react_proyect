// importar paquetes del core de nodejs


// importar paquetes de terceros con npm o yarm (express)
const express = require("express")

// importar paquetes locales
const rutas = require("./routes/index.js")

// configurar los pauqetes necesarios
const app = express()

// declarar variables auxiliares
const PORT = 3000

// configurar las rutas (end point)
    /*app.get("/", function(req, res){
        res.json({mensaje: "Pagina Inicio"})
    })

    app.get("/user", function(req, res){
        res.json({mensaje: "Pagina de usuario"})
    })*/
    //llamado de ejemplo.js
    //rutas(app)

    app.use("/api", rutas)

// levantar el servidor
app.listen(PORT, function(){
    console.log(`El servidor esta iniciado en http://localhost: ${PORT}`)
})
