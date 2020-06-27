import React from 'react';
import axios from 'axios';
import SearchComponent from './searchComponent.jsx';
import ChartComponent from './chartComponent.jsx';
import TOKEN from './apikey.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      priceData: {},
      closingDates: [],
      closingPrices: [],
      currentBTCUSD: '処理中',
      currentBTCJPY: '処理中',
      currentETHUSD: '処理中',
      currentETHJPY: '処理中',
      currentLTCUSD: '処理中',
      currentLTCJPY: '処理中',
    };
    this.searchRequest = this.searchRequest.bind(this);
    this.sortData = this.sortData.bind(this);
    this.updatePricing = this.updatePricing.bind(this);
  }


  componentDidMount() {
    let time = new Date().toLocaleTimeString('en-US');
    const headers = { authorization: "Apikey " + TOKEN};
    axios.get("https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC&tsyms=USD,JPY", { headers: headers })
    .then((response) => { this.setState({
      currentBTCUSD: response.data.BTC.USD,
      currentBTCJPY: response.data.BTC.JPY,
      currentETHUSD: response.data.ETH.USD,
      currentETHJPY: response.data.ETH.JPY,
      currentLTCUSD: response.data.LTC.USD,
      currentLTCJPY: response.data.LTC.JPY,
      currentTime: time
    })});
  }

  updatePricing() {
    let time = new Date().toLocaleTimeString('en-US');
    const headers = { authorization: "Apikey " + TOKEN};
    axios.get("https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC&tsyms=USD,JPY", { headers: headers })
    .then((response) => { this.setState({
      currentBTCUSD: response.data.BTC.USD,
      currentBTCJPY: response.data.BTC.JPY,
      currentETHUSD: response.data.ETH.USD,
      currentETHJPY: response.data.ETH.JPY,
      currentLTCUSD: response.data.LTC.USD,
      currentLTCJPY: response.data.LTC.JPY,
      currentTime: time
    })});
  }
  // https://api.coindesk.com/v1/bpi/historical/close.json?start=2013-09-01&end=2013-09-05
  //YYYY-MM-DD&end=YYYY-MM-DD

  //Sample Output:
  //{"bpi":{"2013-09-01":128.2597,"2013-09-02":127.3648,"2013-09-03":127.5915,"2013-09-04":120.5738,"2013-09-05":120.5333},"disclaimer":"This data was produced from the CoinDesk Bitcoin Price Index. BPI value data returned as USD.","time":{"updated":"Sep 6, 2013 00:03:00 UTC","updatedISO":"2013-09-06T00:03:00+00:00"}}

  searchRequest(dateSettings) {
    event.preventDefault();
    if (dateSettings.startYear.length === 0 || dateSettings.startMonth.length === 0 || dateSettings.startDay.length === 0 || dateSettings.endYear.length === 0 || dateSettings.endMonth.length === 0 || dateSettings.endDay.length === 0) {
      alert('You should have filled out all the forms.');
      window.open('https://www.youtube.com/watch?v=JbcDI8FyRpE');
      return;
    }
    const coindeskAPI = `https://api.coindesk.com/v1/bpi/historical/close.json?start=${dateSettings.startYear}-${dateSettings.startMonth}-${dateSettings.startDay}&end=${dateSettings.endYear}-${dateSettings.endMonth}-${dateSettings.endDay}`;

    axios.get(coindeskAPI)
      .then((response) => {
        this.sortData(response.data.bpi)
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  sortData(unsorted) {
    let closingDate = Object.keys(unsorted);
    let closingPrice = Object.values(unsorted);
    this.setState({
      priceData: unsorted,
      closingDates: closingDate,
      closingPrices: closingPrice
    });
    document.getElementById("display").textContent = "data loaded -> now press 'generate BTC chart' below";
  }


  render() {
    return (
      <div>
        <div className="appName">Crypto Cartographer</div>
        <a className="appName2" href="https://www.coindesk.com/price/bitcoin">Powered by CoinDesk</a>
        <div className="appName3">-Current BTC Price&nbsp;[USD:&nbsp;${this.state.currentBTCUSD},&nbsp;&nbsp;JPY:&nbsp;¥{this.state.currentBTCJPY}]</div>
        <div className="appName3">-Current ETH Price&nbsp;[USD:&nbsp;${this.state.currentETHUSD},&nbsp;&nbsp;JPY:&nbsp;¥{this.state.currentETHJPY}]</div>
        <div className="appName3">-Current LTC Price&nbsp;[USD:&nbsp;${this.state.currentLTCUSD},&nbsp;&nbsp;JPY:&nbsp;¥{this.state.currentLTCJPY}]</div>
        <button className = "chartButton" onClick={this.updatePricing}>Update Pricing</button>
        <div className="appName2" style={{"fontWeight": "bold"}}>pricing as of&nbsp;{this.state.currentTime} via cryptocompare.com</div>
        <SearchComponent searchPrices = {this.searchRequest}></SearchComponent>
        <div id="display" className="appName4"></div>
        <ChartComponent pricePacket={this.state}></ChartComponent>
      </div>
    )
  }
}

export default App;

