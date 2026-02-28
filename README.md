# Angular technical test

**Author** : Anthony VISOCCHI
**[ISC License](./LICENSE)**

## Description

This is an Angular technical test project. The goal of this technical test is to display categories with filters and a search function.

## How to run with Docker

1. Docker is required.
2. Run `sudo docker build -t test .` at root project to build test.
3. Run `sudo docker run -p 4200:4200 -p 3001:3001 test` at root project to launch test.
4. Then go to : http://localhost:4200
5. The displayed categories are accessible here : `http://localhost:4200/visible-categories`

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

1. [Our Express server's README](api/README.md)
2. [Our Angular client's README](app/README.md)
3. [Here we use Git hooks](doc/git.md)
4. [Run the projet inside containers with Docker](https://www.docker.com/)
5. [Validate project processes runing pipelines with Github CI](doc/CI.md)

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
- Add functional testing tools like **Cypress**.
- Add visual testing tools like **Chromatic** or **StoryBook** that have this functionality too.
