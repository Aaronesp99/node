const os =require('os');

// console.log(os.userInfo());

const fs = require("fs");

// fs.writeFile("./nodeFile.txt", "Nuevo texto creado", function(err){
//     if(err){
//         console.log("error: " + err);
//     }
//     console.log("Creado");
// });

fs.readFile("./nodeFile.txt", function(err, data){
    if(err) console.log(err)
    console.log(data.toString());
});

// console.log("Primero este console")