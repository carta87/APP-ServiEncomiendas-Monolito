const express = require('express');
const mongoose = require('mongoose');
const TareaSchema = require('./modelos/Tarea.js')

const app = express();
const router = express.Router();
app.use(express.urlencoded({extended: true}));
app.use(express.json()); 


//Conexion a base de datos
mongoose.connect("mongodb+srv://carta87Mongo:WZ9S8nnwBt3eNjld@serviencomiendas.zntnmcl.mongodb.net/db_mongo_encominedas");

//Operaciones CRUD
router.get('/', (request, response) => {
    response.send("EL inicio de mi API");
})


router.get('/tarea', async (request, response) => {
    try {
        const datos = await TareaSchema.find();
        response.json(datos);
    } catch (error) {
        console.log(error);
        response.status(500).send("Error al consultar tareas");
    }
});

router.post('/tarea', async (request, response) => {
    try {
        let nuevaTarea = new TareaSchema({
            idTarea: request.body.id,
            nombreTarea: request.body.nombre,
            detalleTarea: request.body.detalle
        });
        const datos = await nuevaTarea.save();
        response.send("Tarea almacenada correctamente");
    } catch(error) {
        console.log(error);
        response.status(500).send("Error al guardar la tarea");
    }
});

app.use(router);

app.listen(3000, () => {
   console.log("servidor cooriendo en puerto 3000")
});