import React, { Component } from 'react';
import Search from './components/search';
import TopMenu from './components/topMenu';
import ShowTable from './components/showTable';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            tick : null,
            start_month: null,
            start_year: null,
            end_month: null,
            end_year: null,
        }
        this.handleForm = this.handleForm.bind(this);
    }
    
    handleForm(tick, start_month, start_year, end_month, end_year){
        this.setState({
            tick: tick,
            start_month: start_month,
            start_year: start_year,
            end_month: end_month,
            end_year: end_year
        });
    }
    
  render() {
    return (
        <div>
            <TopMenu />
        <br />
        <br />
            <Search handleForm={this.handleForm} />
            <ShowTable tick={this.state.tick} sm={this.state.start_month} sy={this.state.start_year} em={this.state.end_month} ey={this.state.end_year} />
        </div>
    )
}}

export default App;
