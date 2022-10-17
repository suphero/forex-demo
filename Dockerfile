FROM node as builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
RUN npm test

FROM node:slim
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci --production
COPY --from=builder /usr/src/app/dist ./dist
EXPOSE 3000
CMD [ "node", "dist" ]
