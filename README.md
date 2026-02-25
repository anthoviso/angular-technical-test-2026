# Angular technical test

**Author** : Anthony VISOCCHI
**[ISC License](./LICENSE)**

## Description

This is an Angular technical test project. The goal of this technical test is to display categories with filters and a search function.

## How to run with Docker

- TO DO

## How to run with Node.js

1. Node.js `^22.12.0 || ^24.0.0` is required.
2. `npm i`: Install all dependencies.
3. `npm start`: Launch client app and api server.
4. Then go to : http://localhost:4200
5. The displayed categories are accessible here : `http://localhost:4200/visible-categories`

## Architecture

- **`api`** folder : Node.js - Express server which prodvides a REST api.
- **`app`** folder : Angular SPA which consumes the API.

## Documentation

1. [Express server](api/README.md)
2. [Angular client](app/README.md)
3. [Git hooks](doc/git.md)

## Scripts

- `npm i`: Install all dependencies.
- `npm start`: Launch client app and api server.
- `npm run start:app`: Launch only client app.
- `npm run start:api`: Launch only api server.

## Links

- [Figma web design](https://www.figma.com/file/wr3a4hOd5A1Y9F5R7rmhAt/Test-technique-front-end?node-id=0%3A1)

## What should we add too ?

- **Renovate** for automatic dependencies updates.
- **Xray** or **SonarQube** for quality assurance, security vulnerabilities, CVEs.
