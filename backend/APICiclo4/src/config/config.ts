export namespace configuracion {

  // Clave JWT
  export const claveJWT: string =
    process.env.CLAVE_JWT || "MisionTIC";

  // URL microservicio notificaciones
  export const baseURL: string =
    process.env.BASE_URL || "http://localhost:5000/";

  // Cadena conexión base de datos
  export const cadenaBD: string =
    process.env.CADENA_BD || "";

  // Tipo de comunicación
  export const tipoComunicacion: string =
    process.env.TIPO_COMUNICACION || "email"; // "email" o "sms"

}
