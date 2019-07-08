---
title: "Hosting your site With Digital Ocean and Docker"
date: "2016-03-27"
type: "post"
---

I want to share with you how I am hosting my website with [Digital Ocean](https://m.do.co/c/d5aca73b366f) (hosting company) and [Docker](https://docker.com) (places your app in containers).

First off, I created my droplet on DO and used the docker image from the list of "One-click Apps". The droplet was the $10 a month size as I don't currently need anything more. (If you want to try Docker for a month or two then [click here](https://m.do.co/c/d5aca73b366f)).

After going through the setup process, I accessed my server through SSH and downloaded the Ubuntu image.

\`\`\` docker pull ubuntu \`\`\`

Once I have downloaded the Ubuntu image, I created my own container. I know I could have pulled in the [php-fpm](https://hub.docker.com/_/php/) container (and I did), I couldn't quite work out how I was supposed to get it working properly. So while this next part was really tedius, it has taught me a valuable lesson.

Onto the command for creating my container...

\`\`\` docker run -tid -p 80:80 -p 443:443 -v /home/project/public:/home/project/public --name CONTAINERNAME \`\`\`

Now my container is up and running and sharing my data with the server. I then mount the container by running...

\`\`\` docker attach CONTAINERNAME \`\`\`

Once in, I begin to install PHP 7, NGINX, PHP-FPM and everything else I need for hosting my site (the list is long as the Ubuntu image is barebones). I then add my server block info for http and https rules as well as subdomain redirects.

Once finished, I press...

\`\`\` ctrl+p ctrl+q \`\`\`

This will detach from your continer, but won't stop any services. I would recommend you never type \`\`\`exit\`\`\` within the container if you want to keep it running along with it's services.

Now we need a database container, I user MariaDB and followed the documentation from their [Docker Hub](https://hub.docker.com/_/mariadb/) page.

\`\`\` docker run -p 3306 --name some-mariadb -e MYSQL_ROOT_PASSWORD=my-secret-pw -d mariadb:tag --character-set-server=utf8mb4 --collation-server=utf8m4bd \`\`\`

This will create a container for your MariaDB database, you can then attach yourself to the container and create your personal database using the usual MySQL commands.

Now quit your database and detach from the container with...

\`\`\` ctrl+p ctrl+q \`\`\`

The run...

\`\`\` docker network inspect bridge \`\`\`

It will list your containers and display your IP address, you need to look out for your MariaDB container and take not of your IP address. You can then edit your database configuration file and where it says DB_HOST, place your IP here and along with your username/password details, it should connect.

Make sure to either run any migrations or export/import your database and your website is now fully up and running on Docker instances.

As I become more acquainted with the behemouth that is Docker, I will create more tutorials with regards to what it is is I wanted to accomplish and how I did it.
