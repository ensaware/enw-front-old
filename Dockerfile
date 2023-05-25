FROM node:19.9.0 AS runner

ENV APP_HOME /app

WORKDIR $APP_HOME

ENV NODE_ENV production

COPY package.json ./
COPY package-lock.json ./

RUN pnpm install

COPY . ./

RUN pnpm next build

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]