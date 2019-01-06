import React, { Component } from 'react';
import axios from 'axios';
import { Dropdown, Form, Container, Button, Icon } from 'semantic-ui-react';
import { tickerOptions } from '../tickers.js';
import Extras from './extra';

class Search extends Component {

    constructor(props){
        super(props);
        this.state = {
            tick : null,
            tickerList: tickerOptions,
            month: null,
            year: null,
            start_month: null,
            start_year: null,
            end_month: null,
            end_year: null,
            submit: false
        }
    }
    
    handleChange = (e) => {
        var name = e.target.textContent
        
        var year = [];
        var month = [];
        axios.get('http://localhost:8000/stocks/' + name)
        .then(res => {
            res.data.map(d => {
                var b = d.date.split("-").map(Number);
                if(year.includes(b[0])){
                    if(month.includes(b[1])){
                        var aaa = 0
                    }else{
                        month.push(b[1]);
                    }
                }else{
                    year.push(b[0]);
                    month.push(b[1]);
                }
            })
            
    
        var new_y = year.map(y => {
            return(
                {key: y, value: y, text: y}
            )
        });
        
        var new_m = month.map(m => {
            return(
                {key: m, value: m, text: m}
            )
        });
            
           this.setState({
            tick: name,
            month: new_m,
            year: new_y
        });
        })
    }
    
    handleSubmit = (e) => {
        if(this.state.tick){
        e.preventDefault();
        this.props.handleForm(this.state.tick, this.state.start_month, this.state.start_year, this.state.end_month, this.state.end_year);
        }else{
            alert('please select a company');
        }
    }

    handleStartMonth = (e) => {
        this.setState({
            start_month: e.target.textContent
        });
    }
    handleStartYear = (e) => {
        this.setState({
            start_year: e.target.textContent
        });
    }
    handleEndMonth = (e) => {
        this.setState({
            end_month: e.target.textContent
        });
    }
    handleEndYear = (e) => {
        this.setState({
            end_year: e.target.textContent
        });
    }
    
render() {
    return (
        <Container>
        <Form onSubmit={this.handleSubmit}>
            <Form.Group>
        <Form.Field>
        <label>&nbsp;</label>
            <Button disabled color='grey'>FOR</Button>
         </Form.Field>
              <Form.Field required width={3}>
            <label>SELECT COMPANY</label>
            <Dropdown placeholder='Select Symbol' onChange={this.handleChange} fluid search selection options={this.state.tickerList} />
         </Form.Field>
        <Form.Field>
        <label>&nbsp;</label>
            <Button disabled color='grey'>FROM</Button>
         </Form.Field>
         <Form.Field width={2}>
            <label>FROM MONTH</label>
            <Dropdown placeholder='MONTH' id="start_month" onChange={this.handleStartMonth} fluid search selection options={this.state.month} />
         </Form.Field>
        <Form.Field width={2}>
            <label>FROM YEAR</label>
            <Dropdown placeholder='YEAR' id="start_year" onChange={this.handleStartYear} fluid search selection options={this.state.year} />
         </Form.Field>
        <Form.Field>
        <label>&nbsp;</label>
            <Button disabled color='grey'>TO</Button>
         </Form.Field>
         <Form.Field width={2}>
            <label>TO MONTH</label>
            <Dropdown placeholder='MONTH' id="end_month" onChange={this.handleEndMonth} fluid search selection options={this.state.month} />
         </Form.Field>
        <Form.Field width={2}>
            <label>TO YEAR</label>
            <Dropdown placeholder='YEAR' id="end_year" onChange={this.handleEndYear} fluid search selection options={this.state.year} />
         </Form.Field>
        <Form.Field >
        <label>&nbsp;</label>
            <Button animated type='submit' color='green'>
            <Button.Content visible>&nbsp; Go &nbsp;</Button.Content>
      <Button.Content hidden>
        <Icon name='arrow right' />
      </Button.Content>
        </Button>
         </Form.Field>
           </Form.Group>
        </Form>
        <br />
        <hr />
        <br />
        <Extras tick={this.state.tick} />
        <br />
        <br />
        </Container>
    );
  }
}

export default Search;
