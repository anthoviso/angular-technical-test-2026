FROM node:24-alpine

WORKDIR /project

COPY package*.json ./
COPY api/package*.json ./api/
COPY app/package*.json ./app/

RUN npm i

COPY . .

EXPOSE 4200
EXPOSE 3001

CMD ["npm", "run", "start:docker"]