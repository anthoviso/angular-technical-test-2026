# Angular technical test

**Author** : Anthony VISOCCHI
**[ISC License](./LICENSE)**

## Description

This is an Angular technical test project. The goal of this technical test is to display categories with filters and a search function.

## How to run

1. `npm i`: Install all dependencies.
2. `npm start`: Launch client app and api server.
3. Then go to : http://localhost:4200

## Architecture

- **`api`** folder : Node.js - Express server which prodvides a REST api.
- **`app`** folder : Angular SPA which consumes the API.

## Documentation

1. [Express server](api/README.md)
2. [Angular client](app/README.md)

## Scripts

- `npm i`: Install all dependencies.
- `npm start`: Launch client app and api server.
- `npm run start:app`: Launch only client app.
- `npm run start:api`: Launch only api server.
