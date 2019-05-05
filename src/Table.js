import React, { Component} from 'react';
import ReactTable from 'react-table';
import "react-table/react-table.css";
import dataSet from './tallestBuildingCities.json';


class Table extends Component {

    // 1 add create-react-table dependency
    // 2 check that the data is working
    // 3 sort columns
    // check for errors

render () {

console.log('dataSet', dataSet);
  return(
    <div>
      <div> List of tallest Buildings per cities</div>
      <ReactTable
      data={dataSet}
      columns={[
          {
            Header: 'all Structures',
            accessor : 'All\nStructures',
          }
      ]}
      defaultPageSize ={40}
      />

    </div>
  )
 }
}

export default Table;
