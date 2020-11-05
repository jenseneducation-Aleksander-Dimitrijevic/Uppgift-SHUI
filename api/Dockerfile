FROM node:10

WORKDIR /usr/src/app/api

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "run", "start"]