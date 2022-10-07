FROM node:10
WORKDIR /usr/src/app
COPY package*.json ./

USER root

RUN npm install
COPY . .
EXPOSE 3030

CMD ["npm", "start"]
