FROM node:14.15.4-alpine3.10

ENV CI=true

WORKDIR /app

COPY package.json ./

#COPY yarn.lock ./
#
#RUN yarn --registry http://registry.npmjs.org
#
#RUN yarn --version
#
#RUN yarn cache clean --force

RUN npm config set proxy null
RUN npm config set https-proxy null
RUN npm config set registry http://registry.npmjs.org/

RUN npm install --verbose
#RUN npm install
#--production=true
#RUN yarn add global @nestjs/cli

COPY ./ ./

CMD [ "yarn", "start:dev" ]