'use strict';

const app = require('./express/server');
// import, trae lo que tenga el archivo y lo guarda en variable.

const PORT = process.env.PORT || 4881;
//process.env tiene varias variables dentro. va a estar siempre disponible.
//busca puerto o sino hay usa el 4881

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
// listen recibe un puerto, y una func. la funcion se ejecuta despues de levantar el puerto.
//avisa que levanto con el console.log.

