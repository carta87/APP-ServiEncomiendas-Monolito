"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configuracion = void 0;
var configuracion;
(function (configuracion) {
    // Clave JWT
    configuracion.claveJWT = process.env.CLAVE_JWT || "MisionTIC";
    // URL microservicio notificaciones
    configuracion.baseURL = process.env.BASE_URL || "http://localhost:5000/";
    // Cadena conexión base de datos
    configuracion.cadenaBD = process.env.CADENA_BD || "";
    // Tipo de comunicación
    configuracion.tipoComunicacion = process.env.TIPO_COMUNICACION || "email"; // "email" o "sms"
})(configuracion = exports.configuracion || (exports.configuracion = {}));
//# sourceMappingURL=config.js.map