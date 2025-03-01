# Étape 1 : Construction de l'application Angular
FROM node:20 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

FROM node:20 AS frontend
WORKDIR /app
COPY --from=build /app /app
EXPOSE 4200

CMD ["npm", "start"]
