FROM node:10
WORKDIR /usr/app/index
COPY package*.json ./

USER root

RUN npm install
COPY . .
EXPOSE 3030

CMD ["npm", "start"]
