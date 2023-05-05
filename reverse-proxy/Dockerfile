FROM nginx
RUN rm /etc/nginx/conf.d/default.conf
COPY default.conf /etc/nginx/conf.d
COPY certificate.cer /usr/share/nginx
COPY certificate.pkey /usr/share/nginx
