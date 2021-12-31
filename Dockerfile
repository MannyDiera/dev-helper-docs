# build stage
FROM node:lts-alpine as build-stage
WORKDIR /app
ADD ./docs /app
RUN npm install && npm run build

# production stage
FROM nginx:stable-alpine as production-stage
ADD --from=build-stage /app/src/.vuepress/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
