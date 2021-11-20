FROM node:16-alpine3.14 as build

WORKDIR /app/

COPY package.json yarn.lock /app/
RUN yarn install

COPY . /app/
RUN yarn build

FROM httpd:2.4
# Copy the build of yarn build from the 'build' stage
# The basic httpd Docker Image for Apache reads site content from htdocs by default - we're copying only the /build folder content into /htdocs
COPY --from=build /app/build/ /usr/local/apache2/htdocs
# Additionally add just the .htaccess file - doing specific copies will exlude files that are not needed
COPY --from=build /app/.htaccess /app/init_container.sh /usr/local/apache2/htdocs/
# Copy the sshd_config file 
COPY --from=build /app/sshd_config /etc/ssh
# Override the default Apache conf with ours
COPY --from=build /app/apache/httpd.conf /usr/local/apache2/conf/httpd.conf

RUN apt-get update -yy \
    && apt-get upgrade -yy \
    && apt-get install -y --no-install-recommends openssh-server \
    && echo "root:Docker!" | chpasswd \
    && chmod +x /usr/local/apache2/htdocs/init_container.sh

EXPOSE 80 2222
ENTRYPOINT [ "/usr/local/apache2/htdocs/init_container.sh" ]