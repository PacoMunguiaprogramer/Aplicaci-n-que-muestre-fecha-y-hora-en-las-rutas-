const ruta= require("express").Router(); //Contiene las rutas
const mensajee = require("../middleware/fecha-hora");
const fechoraruta=require("../middleware/fecha-hora");

ruta.get("/ruta1",fechoraruta,(req,res)=>{
res.send("Esta es la ruta 1");
})

ruta.get("/ruta2",mensajee.mensajee,(req,res)=>{
    res.send("Esta es la ruta2")
})

module.exports=ruta;