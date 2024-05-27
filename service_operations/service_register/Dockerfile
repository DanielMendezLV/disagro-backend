# Obtener la imagen que necesitamos
# en este caso, node v.10.x.x
FROM --platform=linux/amd64 node:14.17.0-alpine

# Asignar el workdir de la api
WORKDIR /usr/src/app

# Copiar el package-json
COPY package*.json ./

# Correr 'npm install' para instalar todas las dependencias que necesitemos
RUN npm install

# Copiar todos los archivos al workdir
COPY . .

# Exponer el puerto 80 al mundo
EXPOSE 4050

# Correr NodeJS
CMD ["npm", "start"]