FROM node:current-alpine AS base
WORKDIR /base
COPY package*.json ./
COPY yarn.lock ./
COPY next.config.js ./
COPY postcss.config.js ./
RUN yarn
COPY . .

FROM base AS build
ENV NODE_ENV=production
WORKDIR /build
COPY --from=base /base ./
RUN yarn build

FROM node:current-alpine AS production
ENV NODE_ENV=production
WORKDIR /app
COPY --from=build /build/package*.json ./
COPY --from=build /build/yarn.lock ./
COPY --from=build /build/.next ./.next
COPY --from=build /build/next.config.js ./next.config.js
COPY --from=build /build/public ./public
RUN yarn add next

EXPOSE 3000
CMD yarn start