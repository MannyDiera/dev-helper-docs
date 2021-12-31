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
This project is ran as a docker container in production and it makes sense to build the image and run the container on your machine when there are any major changes (such as node/npm or main dependency updates), just to make sure the project will build and run without issues.

You can do this by running the following commands in the root directory of the project.

```
#build the image
docker build -t dev-helper-image .

#run the container
docker run --name dev-helper \
-p 8089:80 \
dev-helper-image
```

You can also pull the latest image of this project from Docker Hub and run locally with the following command.

```
docker run --name dev-helper -p 8089:80 \
mannyscontainers/dev-helper-docs:latest
```

docker run --name dev-helper -d \
-p 8088:80 \
mannyscontainers/dev-helper-docs:latest

## Contributing
### Recommendations
If you have any ideas or recommendations to add to this project, just let me know @ mdiera.dvk@gmail.com

### Issues
For any issues, please create an issue and be as descriptive as possible and add instructions to recreate your issue (OS, node & npm versions, etc.)


### References
#### Github Actions / CI/CD
[**Setting up CI/CD Traversy Media YT**](https://www.youtube.com/watch?v=X3F3El_yvFg)

[**Docker Hub Github Actions**](https://docs.docker.com/ci-cd/github-actions/)

#### WatchTower notes 
[**WatchTower Docs:**](https://containrrr.dev/watchtower)

When running WatchTower, there is an optional parameter we can pass in for the poll interval, it defaults to 86400 (24 Hours) as mentioned in the [poll interval section](https://containrrr.dev/watchtower/arguments/#poll_interval)

You can also run the WatchTower container just once to check to see if there is an updated version of any docker container currently running, run the following:

```
docker run -d --rm --name watchtower \
-v /var/run/docker.sock:/var/run/docker.sock containrrr/watchtower --cleanup --run-once
```
