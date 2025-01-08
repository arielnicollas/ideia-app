# Stage de desenvolvimento
FROM node:18-alpine AS development

WORKDIR /usr/src/app/nestjs

# Copiar o package.json e package-lock.json para o container
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar o restante do código
COPY tsconfig*.json ./

# Construir o projeto
# RUN npm run build

# # Stage final
# FROM node:18-alpine 

# WORKDIR /usr/src/app

# # Copiar o conteúdo do container de desenvolvimento
# COPY --from=development /usr/src/app /usr/src/app

EXPOSE 3000

CMD ["npm", "run", "start:dev"]
