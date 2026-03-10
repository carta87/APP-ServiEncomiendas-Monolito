export namespace configuracion {
  export const claveJWT = process.env.CLAVE_JWT || "MisionTIC";
  export const baseURL = process.env.BASE_URL || "https://monolito-notificaciones-serviencomiendas.onrender.com/" //"http://localhost:5000/";
  export const cadenaBD = process.env.CADENA_BD || "mongodb+srv://carta87Mongo:WZ9S8nnwBt3eNjld@serviencomiendas.zntnmcl.mongodb.net/db_mongo_encominedas";
  export const tipoComunicacion = process.env.TIPO_COMUNICACION || "email";
  //export const tipoComunicacion = process.env.TIPO_COMUNICACION || "sms";
}
