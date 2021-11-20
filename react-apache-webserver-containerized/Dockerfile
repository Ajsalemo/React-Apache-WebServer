FROM node:16-alpine3.14 as build

WORKDIR /app/

COPY package.json yarn.lock /app/
RUN yarn install

COPY . /app/
RUN yarn build

FROM httpd:2.4
# Copy the build of yarn build from the 'build' stage
# The basic httpd Docker Image for Apache reads site content from htdocs by default
COPY --from=build /app/build/ /usr/local/apache2/htdocs
COPY --from=build /app/.htaccess /usr/local/apache2/htdocs
# Override the default Apache conf with ours
COPY --from=build /app/apache/httpd.conf /usr/local/apache2/conf/httpd.conf

EXPOSE 80
CMD /usr/local/apache2/bin/httpd -D FOREGROUND