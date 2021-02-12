var express = require('express');

var server= express();

server.use(express.static('public'));
//configuracion server
const IP = process.env.IP || "0.0.0.0";
const PORT = process.env.PORT || 3000;
//poniendo a trabajar el server
server.listen(PORT,IP,(err)=>{
    if(err){
        console.log("> Error al iniciar server: " + err);
        throw err;
   }
   console.log(">server escuchando en http://" + 
   IP + ";" + PORT + "/ ...");
//http://127.0.0.1:3000/
});