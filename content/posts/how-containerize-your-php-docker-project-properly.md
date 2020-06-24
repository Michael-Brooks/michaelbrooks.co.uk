---
title: How to containerize your PHP/NGINX docker project properly
date: 2016-04-11
published: true
tags: ['Docker','PHP','NGINX','tutorial']
canonical_url: false
description: "This evening, I had myself a little challenge. I would turn my two containers (MariaDB and my own built container) into more containers, but using the power of Docker's official container repos. E.g. I would have 3 containers in total PHP7-FPM, NGINX and my already created MariaDB."
---

This evening, I had myself a little challenge. I would turn my two containers (MariaDB and my own built container) into more containers, but using the power of Docker's official container repos. E.g. I would have 3 containers in total PHP7-FPM, NGINX and my already created MariaDB.

If you don't know my steps I previously created, you can check it out [here](/hosting-your-site-digital-ocean-and-docker) and skip to MariaDB for your database container and settings.

First off, I used the PHP container and followed instructions to have a PHP7-FPM container. You can see below for the Docker file, just copy it and run the command below...

https://gist.github.com/Michael-Brooks/14796d59271812a1070361532004ceab.js?file=PHP7 Dockerfile

``` docker build -t php7 . docker run -d --name php7 php7 ```

This will build a php7 Image based on the PHP7-FPM container and add the relevant system, PHP and PECL extensions needed. Please bear in mind that this is for my OctoberCMS app and you may need different extensions. If this is the case, you will need to research and find the correct extensions for your project.

Now we have PHP7-FPM, we also need our trusty old proxy server NGINX.

``` docker run -p 80:80 -p 443:443 --name nginx -v "$PWD":/PATH/TO/PROJECT:ro -d nginx ```

To follow the next steps, we will need to temporarily stop our nginx server and start it up again once we're finished...

``` docker stop nginx ```

This will create our NGINX container using the ports usual ports including 443 for our secure port and share our project to the container as read-only (:ro).

Now for our SSL certificates. Run the following code and follow the steps which pop up.

``` sudo docker run -it --rm -p 443:443 -p 80:80 --name letsencrypt -v "/etc/letsencrypt:/etc/letsencrypt" -v "/var/lib/letsencrypt:/var/lib/letsencrypt" quay.io/letsencrypt/letsencrypt:latest auth docker start nginx ```

If you have followed along so far, then we have almost finished, we now need to copy our SSL directory to NGINX which will share the SSL directory as read-only.

``` docker cp /etc/letsencrypt/live/DOMAINNAME/ nginx:/etc/letsencrypt/live/DOMAINNAME:ro ```

Finally, we can create a default.conf file and copy it into the correct nginx directory.

https://gist.github.com/Michael-Brooks/14796d59271812a1070361532004ceab

From my GIST above, I redirect all non secure requests over to a secure connection and as I have 0 subdomains, I redirect them all to my main domain name. You can edit as you see fit, but it should give you a good idea.

Please note the fastcgi_pass PHP_FPM_IP:9000; section, in order to get your PHP_FPM_IP you will need to run the following...

``` docker network inspect bridge ```

Looking for the php7 container, you should see something similar to...

``` "Containers": { "5bdf47e8153e713281ef59defe394f32b6172ba80ea626898d1566daf3541322": { "Name": "nginx", "EndpointID": "61de2b82a696984286a0b0e912e2c869bf755afa4e74e246182eeca1ace8412c", "MacAddress": "02:42:ac:11:00:02", "IPv4Address": "172.17.0.2/16", "IPv6Address": "" }, "a814706d03e4583bf061229bbb8c872d5ccd70d1e8b38a28a8dd80b984192027": { "Name": "mariadb", "EndpointID": "1d33b48beed9b7a43ea48d8d0b89811d0978f4af4a840b1d60ce2b4125bc6fb4", "MacAddress": "02:42:ac:11:00:03", "IPv4Address": "172.17.0.3/16", "IPv6Address": "" }, "fe46b9bcc689ba7fce47abe73f870408876b1b9c84094d3763fbe9ff8b601f4a": { "Name": "php7", "EndpointID": "c35329419ed8652ac23cfba7f9808a27d248237f14cd1d14d5668e9c2069e310", "MacAddress": "02:42:ac:11:00:04", "IPv4Address": "172.17.0.4/16", "IPv6Address": "" } }, ```

As you can see from the code above, my IP is... 172.17.0.4 so I would place that into my default.conf like...

``` fastcgi_pass 172.17.0.4:9000; ```

Now for copying the default.conf file...

``` docker cp default.conf nginx:/etc/nginx/conf.d/default.conf docker restart nginx ```

This will copy your file over to the correct location and a quick restart will ensure the new configuration has been loaded in.

If you are seeing a "502 Bad Gateway" then you will need to go into your php container and edit the file pemissions as follows...

UPDATE: If you pull down my latest Dockerfile, you will no longer need to perform these chown and chmod steps as it now does it inside of the Dockerfile.

``` docker exec -it php7 bash chown -R www-data public cd public sudo chmod -R gu+w storage sudo chmod -R guo+w storage ```

This should sort out your folder permissions and now you can drink a cup of tea and enjoy all of your hard work.

If you have any problems or would like to suggest anything, please feel free to comment below.
