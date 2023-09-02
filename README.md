# Blogging Platform

This is a web application where users can log in to the platform and publish blogs.

### Back end
node js(v16.16.0) <br>
express <br> 
typescript(version 5.0.4) <br>
sequelize <br>
postgress <br>

to run Postgres as a docker container please run following command in a terminal

        sudo docker run -p 5432:5432 --name postgres -e POSTGRES_PASSWORD=password -d postgres

### Front end
Nextjs <br>
Bootstrap <br>

JWT is used for authentication

to clone the code please run

        git clone https://github.com/rashidRizvi98/blog-app-node.git

within root folders of each backend and frontend projects, please run following commands

        npm install
        npm start


BE will be available at available at http://localhost:4000

FE will be available at available at http://localhost:3000