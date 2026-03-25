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

# Ejecutar con timeout configurado
CMD ["gunicorn", "--bind", "0.0.0.0:5000", "--workers", "2", "--timeout", "120", "--keep-alive", "5", "index:app"]