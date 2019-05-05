import React, { Component} from 'react';
import ReactTable from 'react-table';
import "react-table/react-table.css";
import dataSet from './tallestBuildingCities.json';


class Table extends Component {

    // 3 sort columns
    // check for errors

render () {

console.log('dataSet', dataSet);

// I take my data out of the table but now I need it to read
// by reducing it
const rawData = {
    empty: {
        Header: '',
        accessor: '#',
    },
    all: {
        Header: 'All Buildings',
        accessor: 'All\nBuildings',
    },
    structure: {
        Header: 'All Structures',
        accessor: 'All\nBuildings',
    },
    city: {
        Header: 'City',
        accessor: 'City',
    },
    country: {
        Header: 'Country',
        accessor: 'country',
    },
    telecom: {
        Header: 'Telecom Towers',
        accessor: 'Telecom\nTowers',
    },
    hundred: {
        Header: '100+',
        accessor: '100+',
    },
    hundredFifty: {
        Header: '150+',
        accessor: '150+',
    },
    twoHundred: {
        Header: '200+',
        accessor: '200+',
    },
    treeHundred: {
        Header: '300+',
        accessor: '300+',
    },
}

const allColumns = Object.keys(rawData).reduce((acc, vs) => {
    console.log('acc', acc);
    console.log('vs', vs);
    return[...acc, rawData[vs]];
}, [])
let columns =[
    ...allColumns
];
  return(
    <div>
      <div> List of tallest Buildings per cities</div>
      <ReactTable
      data={dataSet}
      columns={columns}
      defaultPageSize ={40}
      defaultSorted={[
          {
           desc: true,
          }
      ]}
      />

    </div>
  )
 }
}

export default Table;
