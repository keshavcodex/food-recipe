FROM node:bullseye as builder

WORKDIR /app

COPY package.json .

RUN npm i

RUN chown -R node.node /app/node_modules

COPY . .

RUN npm run build


FROM nginx
COPY --from=builder /app/build /usr/share/nginx/html