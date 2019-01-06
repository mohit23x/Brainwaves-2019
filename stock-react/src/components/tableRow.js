import React from 'react';
import { Table } from 'semantic-ui-react';

const TableRow = ({ data }) => {
  
    const finale = data.map(result => {    
        return(
            <Table.Row key={result.id}>
                <Table.Cell>{result.date}</Table.Cell>
                <Table.Cell>{result.open}</Table.Cell>
                <Table.Cell>{result.close}</Table.Cell>
                <Table.Cell>{result.low}</Table.Cell>
                <Table.Cell>{result.hight}</Table.Cell>
                <Table.Cell>{result.volume}</Table.Cell>
              </Table.Row>
            )
            });
    
    
    return(
      <Table.Body>
      {finale}
       </Table.Body>
    )
    
}

export default TableRow;