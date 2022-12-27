From node:16
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied 
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# if you are building your code for production
# RUN npm ci --only=production

# set the port to 8080
EXPOSE 8080
ARG PORT=8080
RUN echo "The PORT variable value in environment is $PORT"

CMD ["node", "app.js"]


