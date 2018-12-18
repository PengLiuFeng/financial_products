FROM node:10
# Install global pm2
RUN npm install pm2 -g
# Create app directory
RUN mkdir -p /usr/src/app
# Bundle app source
ADD backend.tgz /usr/src/app
WORKDIR /usr/src/app/backend
ENV NODE_ENV dev
CMD ["pm2", "start", "app.js"]
EXPOSE 8080
# Build image
# docker build -t pm2_test:v1 .

# Run docker
# docker run -e NODE_ENV=staging --name pm2_test -p 3500:3500  -d  pm2_test:v1
