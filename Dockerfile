FROM node:21-alpine

WORKDIR /app/client

COPY package.json .

RUN npm install && npm install typescript -g

COPY . .

RUN tsc

CMD ["npm", "run", "dev"]