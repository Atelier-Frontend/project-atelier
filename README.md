# Project Atelier

## About

Atelier's client-facing retail web-portal has become significantly outdated and has been proven to be hurting sales numbers. Project Atelier comprises a complete redesign of the retail portal designed to address this concern and modernize the site.  This document outlines the features implemented as part of Project Atelier in its initial release. This is exclusively a client-side scoped project, with various widgets implemented including Product Overview, Related Items & Comparisons, Ratings & Reviews, and Questions & Answers.

Each member of the team were responsible for different widgets:

 - Blake Crawford: Product Overview
 - Chuck Song: Ratings & Reviews / Questions & Answers
 - Matthew Dailey: Related Items & Comparisons

## Installation & Dev Environment Setup on Local Machine

1. navigate to project-atelier root directory within terminal
2. npm install (installs all dependencies found in package.json)
3. npm run client-dev (builds js bundle based on webpack config and watches for changes)
4. open another terminal window
5. npm run server-dev (starts express server and watches for changes)

The API that feeds data to the project requires a valid token. This token should be stored in a .env file in the root directory. 
Store in the following format: TOKEN=''. The express server references this .env file for all API calls, so it is essential that this step is correctly done.


### Product Overview

Image Gallery:

![alt text](http://g.recordit.co/VjrPzxYWJL.gif)

http://g.recordit.co/VjrPzxYWJL.gif

## Dependencies:

 - react
 - babel
 - axios
 - jquery
 - express
 - nodemon
 - webpack
 - dotenv

## scripts:

 - server-dev: "npx nodemon --watch server server/index.js",
 - client-dev: "npx webpack --watch",
 -  build: "npx webpack",
 -  start: "node server/index.js"
 - test: "Mocha"
