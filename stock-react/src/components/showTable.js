import React, { Component } from 'react';
import { Container, Button, Table, Statistic, Icon, Image } from 'semantic-ui-react';
import axios from 'axios';
import TableRow from './tableRow';


class ShowTable extends Component{
    state = {
        data: []
    }
    
    render(){
        if(this.props.tick) {
        axios.get('http://localhost:8000/stocks/' + this.props.tick + '/' + this.props.sm + '/' + this.props.sy  + '/' + this.props.em  + '/' + this.props.ey)
        .then(res => {
           const alldata = res.data;
            this.setState({
                data: alldata
            });
        })
    }
    return(
    
        <div>
        
        
    <Table celled striped>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Date</Table.HeaderCell>
        <Table.HeaderCell>Open</Table.HeaderCell>
        <Table.HeaderCell>Close</Table.HeaderCell>
        <Table.HeaderCell>Low</Table.HeaderCell>
        <Table.HeaderCell>High</Table.HeaderCell>
        <Table.HeaderCell>Vloume</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

        <TableRow data={this.state.data} />
        
    </Table>
        </div>
    )
    
    }
}


export default ShowTable;