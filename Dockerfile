# build stage
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY ./docs /app
RUN npm install && npm run build

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/src/.vuepress/dist /usr/share/nginx/html
COPY nginx/nginx.conf /usr/share/nginx/nginx.conf
COPY nginx/nginx.conf /usr/share/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
