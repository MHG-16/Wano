FROM node:16.16.0-alpine

# install global npm package
RUN npm i -g eslint

# Set working directory
WORKDIR /usr/src/app

# Copy and install local npm package
COPY package.json* package-lock.json* ./
RUN npm ci

#install husky hooks
RUN npm run husky-install
RUN npx husky add .husky/pre-commit 

# Copy the remaining source code
COPY . .


EXPOSE 8083

# start app
CMD ["npm", "start"]
