# Stage 1

FROM node:12.20.0-alpine as node

WORKDIR /app

COPY . .

RUN npm install

RUN npm run ng build --prod --aot --build-optimizer --optimization true --common-chunk --vendor-chunk --service-worker

# Stage 2

FROM nginx

COPY --from=node /app/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]