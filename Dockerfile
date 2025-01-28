FROM docker.io/node:22.9.0-alpine3.19
WORKDIR /data
COPY . .
RUN npm install --omit=dev,optional

CMD ["npm", "run", "build"]
