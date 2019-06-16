# Repository for Ratings microservice and Purchase History microservice

The Analyst Ratings module displays data and expert recommendations in an accessible and user-friendly UI. As a potential customer, I want to be able to easily and confidently determine whether I should buy, hold, or sell.

The Purchase History module renders a dynamic and individually expanding list of past purchases. As an existing customer, I want to see my history of past purchases so that I can see that I am making good purchasing decisions and/or improve future decisions. 

[Check out the deployed version here](http://ec2-18-221-144-48.us-east-2.compute.amazonaws.com:3001/stocks/T/) and [here](http://ec2-18-221-144-48.us-east-2.compute.amazonaws.com:3011/stocks/T/). 

## Getting Started

* Change directory into each module/microservice
`cd history` or `cd ratings`

* Alternatively, change directory into the proxy
`cd proxy`

* Download dependencies & compile
`npm install`

* Start Server
`npm start`

## Author

Vickie Huang

## Deployment

* This app is best viewed with Chrome web browser
* In `index.html`, include a `<div>` element with `id="ratings"` and `id="history"`
* Add a `<script>` tag
  - Use port `3001` for ratings module and port `3011` for history module
  - (local) `src="localhost:3001/ratings/bundle.js"`
  - (local) `src="localhost:3011/history/bundle.js"`
  - EC2: `src="https://s3.us-east-2.amazonaws.com/merryweather/fec/ratings/bundle.js"`
  - EC2: `src="https://s3.us-east-2.amazonaws.com/merryweather/fec/history/bundle.js"`
  - S3: `src="https://s3.us-east-2.amazonaws.com/merryweather/fec/ratings/bundle.js"`
  - S3: `src="https://s3.us-east-2.amazonaws.com/merryweather/fec/history/bundle.js"`

## Demos

### Ratings Microservice

![](zReadMoreLess.gif)

![](zSwitchingStocks.gif)

![](zConditionalColors.gif)

### History Microservice

![](history_demo.gif)

## Future work

* re-add search bar
* LL purchases
