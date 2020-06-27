import React from 'react';

class SearchComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startYear: '',
      startMonth: '',
      startDay: '',
      endYear: '',
      endMonth: '',
      endDay: ''
    }
    this.handleChange=this.handleChange.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const {value, id} = target;
    this.setState({[id]: value});
  }

  render () {
    return (
      <div>
        <form className="form-inline" onSubmit = {() => {this.props.searchPrices(this.state)}}>
          <label> Starting Year (YYYY)</label>
          <input id="startYear" min="4" max="4" value={this.state.startYear} onChange={this.handleChange}></input>
          <label> Starting Month (MM)</label>
          <input id="startMonth" min="2" max="2" value={this.state.startMonth} onChange={this.handleChange}></input>
          <label> Starting Day (DD)</label>
          <input id="startDay" min="2" max="2" value={this.state.startDay} onChange={this.handleChange}></input>
          <label> Ending Year (YYYY)</label>
          <input id="endYear" min="4" max="4" value={this.state.endYear} onChange={this.handleChange}></input>
          <label> Ending Month (MM)</label>
          <input id="endMonth" min="2" max="2" value={this.state.endMonth} onChange={this.handleChange}></input>
          <label> Ending Day (DD)</label>
          <input id="endDay" min="2" max="2" value={this.state.endDay} onChange={this.handleChange}></input>
          <button type="submit">initiate BTC search</button>
        </form>
      </div>
    );
  }

}


export default SearchComponent;