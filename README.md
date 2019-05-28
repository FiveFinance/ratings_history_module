# Repository for Ratings microservice and Purchase History microservice

## Description
The Analyst Ratings module displays data and expert recommendations in an accessible and user-friendly UI. As a potential customer, I want to be able to easily and confidently determine whether I should buy, hold, or sell.

The Purchase History module renders a dynamic and individually expanding list of past purchases. As an existing customer, I want to see my history of past purchases so that I can see that I am making good purchasing decisions and/or improve future decisions. 

## Deployment

* Use port `3001` for ratings module and port `3011` for history module
* In `index.html`, include a `<div>` element with `id="ratings"` and `id="history"`
* A) add a `<script>` tag with `src="ec2-18-221-144-48.us-east-2.compute.amazonaws.com/ratings/bundle.js"` and `src="ec2-18-221-144-48.us-east-2.compute.amazonaws.com/history/bundle.js"`
* B) for local deployment only, add a `<script>` tag pointing to `src="localhost:3001/ratings/bundle.js.gz"` and `src="localhost:3001/history/bundle.js.gz"`
* This app is best viewed with Chrome web browser

## Getting Started

* Change directory into each module/microservice
`cd history` or `cd ratings`

* Download dependencies & compile
`npm install`

* Start Server
`npm start`

## Author

Vickie Huang
