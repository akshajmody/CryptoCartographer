import React from 'react';
import axios from 'axios';
import Chart from 'chart.js';

class ChartComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pricePacket: []
    };
    this.createChart=this.createChart.bind(this);
  }

  componentDidMount() {
    this.createChart();
  }

  createChart() {
    const ctx = document.getElementById('myChart');
    const btcChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.props.pricePacket.closingDates,
        datasets: [{
          label: 'BTC closing price in USD',
          backgroundColor: 'rgb(0, 158, 97)',
          borderColor: 'rgb(0, 158, 97)',
          borderWidth: 2,
          data: this.props.pricePacket.closingPrices,
          fill: false,
          pointRadius: 1,
          lineTension: 0
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }


  render() {
    return (
      <div>
        <div>
          <button className="chartButton" onClick={this.createChart}>generate BTC chart</button>
        </div>
        <div className="chart-container">
          <canvas className="bitcoinGraph" id="myChart"></canvas>
        </div>
      </div>
    )
  }
}

export default ChartComponent;