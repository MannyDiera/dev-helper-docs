---
sidebar: auto
---

# Tutorials

## CI/CD with Vultr, Docker, Dockerhub, Github Actions & WatchTower

## Creating diagrams for your solution
** Click ok when prompted to load the latest saved diagram.

** If you wish to save to your diagram, you can export it using the 'File' option in the menu or you can create your diagram at [diagrams.net](https://www.diagrams.net/) directly.

<iframe src="https://jgraph.github.io/drawio-integration/localstorage.html#default?configure=1" height="800px" width="100%"></iframe>


## Setting up a Full Stack App (Frontend, API & DB) in development and in production on a Linux machine.

### Database - PostgreSQL
#### Installation on Server for Production
1.- Update packages information
```
sudo apt update -y
```
2.- Install PostgreSQL and the [postgresql-contrib package](https://software.opensuse.org/package/postgresql-contrib)
```
sudo apt install postgresql postgresql-contrib
```
3.- Now switch to the postgres user which has been created by the PostgreSQL installation
```
sudo -i -u postgres
```
4.- Now log in to Postgres
```
psql
```
5.- Create a database
```sql
CREATE database records;
```
6.- Create a user
```sql
create user recordkeeper with ecrypted password '******';
```
7.- Grant user permissions for database
```sql
grant all privileges on database records to recordkeeper;
```
** **At this point the user recordkeeper can perform actions on the records database.**

**However, if we want to create another database, we'll have to log out and log back in as a super user or the postgres user.**
```
# quit and exit
$ \q 
$ exit

# log back in
sudo -i -u postgres
```
8.- Now we can create a new database
```
create database alpha;

# list databases
\l

# list tables
\dt
```
9.- Now same as #7, you can grant roles and so on.
