# Crypto Cartographer
> Full-stack finance app for viewing live Bitcoin, Ethereum, and Litecoin prices and for charting historical Bitcoin data between custom date range

<img src="https://akshajmodyportfolio.s3-us-west-1.amazonaws.com/CryptoDemo1.png" width=800>
<img src="https://akshajmodyportfolio.s3-us-west-1.amazonaws.com/CryptoDemo2.png" width=800>

## Goals
> The central goal of this project was to incorporate Chart.js with React in order to create a financial tool that allows users to view the historical price data of Bitcoin between any date range of their choosing. The secondary goal of this project was to display 3 popular cryptocurrencies' live prices in USD and Yen upon page load. The next major goal that is currently under development will be to allow charting different cryptocurrencies on the same graph to compare performance over specified time.

## Getting Started
> Install dependencies
```
npm install
```
> Obtain a free Crypto Compare API Key from https://min-api.cryptocompare.com/.

> In a text editor, open client/apikeyexample.js and follow the instructions for configuration

```
module.exports = {
  TOKEN: 'input your crypto compare API key here'
}
```
>Start the local server:
```
npm run start
```
>Build the Webpack bundle
```
npm run build
```
>On your preferred browser, navigate to http://localhost:3015/ and enter the desired date range in the directed format. Press the 'initiate BTC search' to retrieve pricing data and then press generate BTC chart to graph the data on the line chart. The chart is interactive and on hovering over individual nodes, daily pricing information can be seen.



