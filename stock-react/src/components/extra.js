import React from 'react'
import { Container, Button, Table, Statistic, Icon, Message } from 'semantic-ui-react';
import axios from 'axios';

class Extras extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            watch: 0
        }
    }
    
    componentDidMount(){
        this.setState({
            watch: this.state.watch+1
        })
    }
    render(){
        if(this.props.tick){
            return(
                <div>
        <Statistic.Group>
        
         <Statistic>
          <Statistic.Value>
            {this.props.tick ? this.props.tick : '-'}
          </Statistic.Value>
          <Statistic.Label>COMPANY TICKER</Statistic.Label>
        </Statistic>
                
        <Statistic>
      <Statistic.Value text>
        THE NAME<br />
        OF COMPANY
      </Statistic.Value>
      <Statistic.Label>FULL NAME</Statistic.Label>
    </Statistic>
        
        
    <Statistic>
      <Statistic.Value>
        <Icon name='eye' />
        {this.state.watch}
      </Statistic.Value>
      <Statistic.Label>WATCH COUNT</Statistic.Label>
    </Statistic>
        
       
        </Statistic.Group>
                <br />
                <Message warning
                    header='Select dates and press GO to see stock archives below' />
                
                </div>
        
        )
        
        }else{
            return(
                <Message warning
                    icon='inbox'
                    header='Please Select the name of the company!' />
            )
        }
    }
}

export default Extras;