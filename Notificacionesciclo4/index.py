from flask import Flask, request
from twilio.rest import Client
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail
import os

# Variables de entorno
TWILIO_ACCOUNT_SID = os.environ.get("TWILIO_ACCOUNT_SID")
TWILIO_AUTH_TOKEN = os.environ.get("TWILIO_AUTH_TOKEN")
TWILIO_PHONE_NUMBER = os.environ.get("TWILIO_PHONE_NUMBER")

SENDGRID_API_KEY = os.environ.get("SENDGRID_API_KEY")
SENDGRID_FROM_EMAIL = os.environ.get("SENDGRID_FROM_EMAIL")

# Crear aplicación Flask
app = Flask(__name__)

@app.route('/', methods=['GET'])
def test():
    return "Test microservicio notificaciones"


# Enviar SMS
@app.route('/send_sms', methods=['POST'])
def send_sms():
    try:
        client = Client(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)

        data = request.json
        contenido = data["contenido"]
        destino = data["destino"]

        message = client.messages.create(
            body=contenido,
            from_=TWILIO_PHONE_NUMBER,
            to='+57' + destino
        )

        print(message.sid)
        return {"status": "success"}

    except Exception as e:
        print(e)
        return {"status": "error"}


# Enviar correo
@app.route('/send_email', methods=['POST'])
def send_email():
    try:
        data = request.json
        contenido = data["contenido"]
        destino = data["destino"]
        asunto = data["asunto"]

        message = Mail(
            from_email=SENDGRID_FROM_EMAIL,
            to_emails=destino,
            subject=asunto,
            html_content=contenido
        )

        sg = SendGridAPIClient(SENDGRID_API_KEY)
        response = sg.send(message)

        print(response.status_code)

        return {"status": "success"}

    except Exception as e:
        print(e)
        return {"status": "error"}


# Ejecutar servidor
if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)