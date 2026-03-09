export namespace configuracion {
  export const claveJWT = process.env.CLAVE_JWT || "MisionTIC";
  export const baseURL = process.env.BASE_URL || "http://localhost:5000/";
  export const cadenaBD = process.env.CADENA_BD || "";
  export const tipoComunicacion = process.env.TIPO_COMUNICACION || "email";
  //export const tipoComunicacion = process.env.TIPO_COMUNICACION || "sms";
}
