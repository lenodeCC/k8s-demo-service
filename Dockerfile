FROM node:14.18.1-bullseye as buildenv

ARG REGISTRY=https://registry.npmmirror.com

WORKDIR /app

COPY ./package.json /app

RUN yarn config set registry ${REGISTRY} && yarn

COPY ./ /app

RUN npm run build && \
  rm -rf src && \
  yarn --prod


FROM node:14.18.1-bullseye-slim

ENV NODE_ENV=production \
  SERVER_ENV=prod

WORKDIR /app

COPY --from=buildenv /app ./

VOLUME /data

EXPOSE 50051

# HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 CMD [ "node","dist/bin/healthCheck" ]

ENTRYPOINT ["scripts/docker-entrypoint.sh"]

CMD ["node","dist/bin/grpc"]