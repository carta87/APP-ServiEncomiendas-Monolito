# Microservicio de Notificaciones

Este proyecto implementa un microservicio desarrollado con **Flask** que permite enviar notificaciones mediante:

- 📩 Correos electrónicos usando **SendGrid**
- 📱 Mensajes SMS usando **Twilio**

El servicio expone endpoints HTTP que pueden ser consumidos por otros sistemas o microservicios, por ejemplo un backend desarrollado con Node.js o LoopBack.

---

# Arquitectura del sistema

El microservicio forma parte de una arquitectura basada en microservicios donde un backend principal consume este servicio para enviar notificaciones a los usuarios.

            ┌──────────────────────┐
            │   Frontend Angular   │
            └──────────┬───────────┘
                       │
                       │ HTTP REST
                       ▼
            ┌──────────────────────┐
            │   Backend LoopBack   │
            │  API principal       │
            └──────────┬───────────┘
                       │
                       │ HTTP REST
                       ▼
         ┌─────────────────────────────┐
         │ Microservicio Notificaciones│
         │        Flask API            │
         └───────────┬───────────┬─────┘
                     │           │
                     ▼           ▼
               Twilio SMS   SendGrid Email


---

# Estructura del proyecto

El servicio principal se encuentra en el archivo:

Este archivo index.py:

- Configuración del servidor Flask
- Endpoints REST
- Integración con Twilio y SendGrid

También se incluye el archivo:

basic-local


Este archivo contiene una configuración de referencia para ejecutar el servicio localmente y se deja únicamente para consulta.

---

# Configuración local

Para ejecutar el servicio en entorno local se utiliza un archivo de configuración llamado:

config.json

Ejemplo -  json:

{
  "TWILIO_ACCOUNT_SID": "XXXX",
  "TWILIO_AUTH_TOKEN": "XXXX",
  "TWILIO_PHONE_NUMBER": "XXXX",
  "SENDGRID_API_KEY": "XXXX",
  "SENDGRID_FROM_EMAIL": "correo@dominio.com"
}

# Configuración local - Docker

docker build -t microservicio-notificaciones .

consola bash:
docker run -p 5000:5000 \
-e TWILIO_ACCOUNT_SID=xxxx \
-e TWILIO_AUTH_TOKEN=xxxx \
-e TWILIO_PHONE_NUMBER=xxxx \
-e SENDGRID_API_KEY=xxxx \
-e SENDGRID_FROM_EMAIL=xxxx \
microservicio-notificaciones