# Dev Helper Docs
This repo contains the documentation for Dev Helper, a project that aims to help teach developers how to integrate tools to create a professional project with documentation, samples and code playgrounds.

## Getting Started
This project was created using [VuePress](https://vuepress.vuejs.org/) and it follows the recommended file structure found [here](https://vuepress.vuejs.org/guide/directory-structure.html#default-page-routing)

### Local Development
To get started, first clone the repo, cd into the docs directory and install the dependencies with:
```
npm install
```
Then, run the project in development mode with:
```
npm run dev
```
### Docker
You can also run the project locally by pulling the docker image and running it as a container by running the following command:

```
docker run --name dev-helper -p 8089:80 \
mannyscontainers/dev-helper-docs:latest
```

## Contributing
### Recommendations
If you have any ideas or recommendations to add to this project, just let me know @ mdiera.dvk@gmail.com

### Issues
For any issues, please create an issue and be as descriptive as possible and add instructions to recreate your issue (OS, node & npm versions, etc.)


### References
#### Github Actions / CI/CD
[**Setting up CI/CD Traversy Media YT**](https://www.youtube.com/watch?v=X3F3El_yvFg)

[**Docker Hub Github Actions**](https://docs.docker.com/ci-cd/github-actions/)




TODO:
To be moved into an actual documentation/tutorial page

#### NGINX
**-Check if Nginx is running:** sudo systemctl status nginx

**-Open Nginx conf**: cd /etc/nginx/sites-available && sudo nano default

**-Check if your nginx config is valid:** sudo nginx -t

**-Restart Nginx after updating the file and validating it:** sudo systemctl restart nginx

Docker

docker login -u mannyscontainers
