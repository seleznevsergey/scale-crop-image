FROM node:8-alpine

ADD . /

EXPOSE 3000

CMD ["node", "."]
