# Nov 30, 2017 

> We made it to the last lecture! :tada: 

The goal of today is to deploy our application to a `production` server!

## Developer Experience (DE)
    * UX is as good as the User Experience is! :) 
        * If it is easy to test, if it is easy to deploy, then developers are less frustrated and can actually focus on the Developer Experience. 
        * If you can improve the DE, then you can expect more value from developers. 

* Let developers own the job!

### DevOps
    * It's defined as a new role in Engineering. 
    * Infrastructure is available and it is there for Engineers! 
    * They write code so that everything is automated so that developers are able to own the product.
    * Developers have ownership of deploying to production 
    * Developers can take responsibility for their actions. 
    * This takes some blaming away!

### Concepts
* Docker
* Containers are like VMs that are really tiny, they simulate servers. 
    * Very simple mechanism that wraps a server application. 
    * They are lighter than a Virtual Machine. 
* Image - Dump of a CD 
    * You create an image of your application, then you can take that image and replicate into another container. 
    * The images are immutable. 

* Learning to deploy an application to the Cloud. Go [here](https://github.com/mignonnesaurus/wtmbjs-4/tree/week-8)

* Dockerfile is the blueprint of the environment in which your application needs to run.
    * How do I declare my application: 
        * `FROM` defines the base image. 
        * `alpine` is the tag of a linux distribution that is very light
        * `WORKDIR` is the working directory on the hard disk. The directory will be created for us.
        * `ADD` add the files to that relative path (inside `app`)
        * `ADD` add all your files to the relative path (inside `app`)
        * Doing things in this order in the Dockerfile: 
        ```
            ADD package.json package-lock.json ./
            RUN npm install
            ADD . .
        ```
            * Makes sure that we only run `npm install` when we change `package.json` and we make use of caches.
        * `CMD` run a command 
* docker-compose file: 
    * Yml file where we declare the dependencies of my application.
        * `depends_on` -> Launch `X` before you launch me (`app`) 
        * `build` => 
        * `volume` => Take this folder and attach it  / plug it to the hard disk.
        * `ports` => The local port in my container is `3000` but I want to map this port to the port that is available in the server / machine where we are running the container.
        * `VIRTUAL_HOST` => The domain where the app will be available.
* development.Dockerfile: 
    * `VOLUME` => we say that app is now a volume. The app is a hard disk that the developer will plugin after. It's just not defined now. Some people will attach or plugin a folder to this volume. 

* We use volumes because we are using `nodemon` for more effective developer time since `nodemon` will take care of reloading the application and we do not want to wait for the image to be rebuilt every time we make a change to the application.

* You can connect to other services just using the `service` name (e.g. `mongo`)

* Load Balancer => Take your request and send it to another server and give you back a response. Load balancer redirects all requests directed to the `VIRTUAL_HOST` value to the service app. 
* Virtual Host => 

* Biggest Benefit => Dev environment is the same as production!

* docker-compose => to run things locally.
* docker-cloud => docker `compose` declaration for the cloud.

* System wide configuration to say what domains should be redirected to which IP addresses. 

* Why didn't I define the port mapping in my production machine?
    * In production setup I don't make use of that feature because I don't want to expose my internal ports.
    * I only do the mapping for my load balancer (80 for http and 443 for https)

* docker-compose.test.yml => special yml for docker cloud used for the testing face of the application, if the tests pass, then you will deploy your application. 


