# Especificar la imagen base a utilizar
FROM node:20-alpine

# Seleccionar directorio de trabajo por defecto
WORKDIR /opt/app

# Copiando el contenido local al contenedor
COPY . .

# Instalando dependencias necesarias
RUN npm install

# Construyendo la aplicación
RUN npm run build

# Exponiendo el puerto en el que la aplicación escuchará
EXPOSE 3000

# Define comando de entrada al contenedor
CMD ["sh", "-c", "npm run start:prod"]