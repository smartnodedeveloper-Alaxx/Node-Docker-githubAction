FROM node:18.20.8-alpine3.21 AS builder

WORKDIR /app
COPY . .

RUN npm install
RUN node --version

FROM node:18.20.8-alpine3.21

COPY --from=builder /app /app

WORKDIR /app

EXPOSE 9000

CMD ["node", "app.js"]