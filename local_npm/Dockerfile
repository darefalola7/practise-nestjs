FROM node:alpine

WORKDIR /app

RUN npm install -g local-npm --verbose

CMD [ "local-npm", "-r", "http://registry.npmjs.org", "-p", "40004", "-u", "http://nest.dev/localnpm" ]