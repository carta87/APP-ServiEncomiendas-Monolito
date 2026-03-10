"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configuracion = void 0;
var configuracion;
(function (configuracion) {
    configuracion.claveJWT = process.env.CLAVE_JWT || "MisionTIC";
    configuracion.baseURL = process.env.BASE_URL || "https://monolito-notificaciones-serviencomiendas.onrender.com/"; //"http://localhost:5000/";
    configuracion.cadenaBD = process.env.CADENA_BD || "mongodb+srv://carta87Mongo:WZ9S8nnwBt3eNjld@serviencomiendas.zntnmcl.mongodb.net/db_mongo_encominedas";
    configuracion.tipoComunicacion = process.env.TIPO_COMUNICACION || "email";
    //export const tipoComunicacion = process.env.TIPO_COMUNICACION || "sms";
})(configuracion = exports.configuracion || (exports.configuracion = {}));
//# sourceMappingURL=config.js.map