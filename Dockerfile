FROM node:alpine

ENV CI=true

WORKDIR /app

COPY package.json ./

#RUN yarn install
#--production=true
#RUN yarn add global @nestjs/cli

COPY ./ ./

CMD [ "yarn", "start:dev" ]