# ビルドステージ
FROM node:22 AS build

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install --production

COPY ./src ./src

# ランタイムステージ（軽量）
FROM node:22-slim

WORKDIR /usr/src/app

COPY --from=build /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/src ./
COPY package*.json ./

EXPOSE 3000

CMD ["node", "app.js"]