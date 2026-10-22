FROM docker.io/node:24.22.1-alpine3.24
WORKDIR /data
COPY . .
RUN npm ci --omit=dev --omit=optional

CMD ["node", "--run", "build"]
