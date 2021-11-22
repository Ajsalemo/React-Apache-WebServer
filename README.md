# React-Apache-WebServer

This sample shows how to host a React application (or other SPA's) and serve it with Apache to do things such as http -> https, domain redirects, rewrites, etc. on Azure Linux App Services with an `.htaccess` file or changing `apache2.conf`.

`react-apache-webserver`:
- This sample is intended to be deployed to a Linux App Service 'blessed Image' - under PHP8 (ex. PHP7.3, PHP7.4) since 7.x versions run with Apache. PHP8 currently uses NGINX.
- This sample can be used in 2 general ways. 
  - 1.) Deploying the entirety of the `build` folder and the rest of the site content under `react-apache-webserver`, this method will require the use of the `startup.sh` script which uses the `apache2.conf` file to point the `DocumentRoot` to `/home/site/wwwroot/build` since this contains the `index.html` and the rest. You can follow [this](https://azureossd.github.io/2020/01/23/php-custom-startup-script-app-service-linux/) guide to set up how to use the `startup.sh` in a custom startup script. 
  - 2.) Deploying only the **contents** of the `build` folder. This would then place the static content in `build` (ex. `index.html`) directly under `/home/site/wwwroot`, so therefor no custom startup script or changing Apache functionality would be needed. 
  - In both cases building the project locally needs to be done first - ex. `yarn build` or `npm run build` and setting the AppSetting `SCM_DO_BUILD_DURING_DEPLOYMENT` to `false` needs to be done to avoid having `Oryx` build the project during deployment, which will cause it to fail due to the language mismatch. 
  - In both scenarios an `.htaccess` can be used for various functionality.

`react-apache-webserver-containerized`:
- This is a custom container/Image of the first example with `ssh` functionality integrated.
- The `.htaccess` currently is set to redirect to `www` - however, this can be changed if desired



