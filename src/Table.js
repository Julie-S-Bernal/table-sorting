import React, { Component} from 'react';
import ReactTable from 'react-table';
import "react-table/react-table.css";
import dataSet from './tallestBuildingCities.json';


class Table extends Component {

render () {

const { sortBy: currentColumn, direction} = this.props.match.params;
const descending = direction ==='desc'? true : false;
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
        accessor: 'Country',
    },
    telecom: {
        Header: 'Telecom Towers',
        accessor: 'Telecom\nTowers',
    },
    hundred: {
        Header: '100m+',
        accessor: '100m+',
    },
    hundredFifty: {
        Header: '150m+',
        accessor: '150m+',
    },
    twoHundred: {
        Header: '200m+',
        accessor: '200m+',
    },
    treeHundred: {
        Header: '300m+',
        accessor: '300m+',
    },
}
const allColumns = Object.keys(rawData).reduce((acc, vs) => {
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
           id: rawData[currentColumn].accessor,
           desc: descending,
          }
      ]}
      />

    </div>
  )
 }
}

export default Table;
