FROM uhub.service.ucloud.cn/rt-deeplearninglab-service/nginx:1.26.1-alpine-web
RUN mkdir -p /var/www/chat.rtclouddata.cn/private/dist
COPY dist/ /var/www/chat.rtclouddata.cn/private/dist
COPY ./nginx.3721.conf /etc/nginx/conf.d/default.conf
