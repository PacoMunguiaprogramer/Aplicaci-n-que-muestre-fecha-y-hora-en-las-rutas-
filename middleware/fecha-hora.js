const fechhora = (req, res, next) => {
    // Captura la fecha y hora actual
    const fechhoraactual = new Date().toLocaleString();
    console.log(`[${fechhoraactual}] `);//Entraron a la ruta: ${req.originalUrl}
    next();
};
const mensajee=(req,res,next)=>{
    console.log("El que con lobos anda a aullar se enseña estas en ruta 2");
    next();
}

module.exports=fechhora;
module.exports.mensajee=mensajee;
