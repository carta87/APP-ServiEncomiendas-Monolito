# Imagen base
FROM python:3.11-slim

# Carpeta de trabajo
WORKDIR /app

# Copiar dependencias
COPY requirements.txt .

# Instalar dependencias
RUN pip install --no-cache-dir -r requirements.txt

# Copiar el código
COPY . .

# Puerto del contenedor
EXPOSE 5000

# Comando para ejecutar la app
CMD ["gunicorn", "--bind", "0.0.0.0:5000", "index:app"]