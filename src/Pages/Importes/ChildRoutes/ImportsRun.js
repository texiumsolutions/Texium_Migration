import React from 'react';
import DataTable from 'react-data-table-component';

const ImportsRun = () => {
  const columns = [
    {
        name: 'ID',
        selector: row => row.id,
    },
    {
        name: 'Name',
        selector: row => row.year,
    },
    {
        name: 'Processing Type',
        selector: row => row.description,
    },
    {
        name: 'Creation Date',
        selector: row => row.year,
    },
    {
        name: 'Total Object',
        selector: row => row.title,
    },
    {
        name: 'Unproceed',
        selector: row => row.year,
    },
    {
        name: 'Transformed',
        selector: row => row.title,
    },
    {
        name: 'Validated',
        selector: row => row.year,
    },
    {
        name: 'Imported',
        selector: row => row.title,
    },
    {
        name: 'Partially Imported',
        selector: row => row.year,
    },
    {
        name: 'Errors',
        selector: row => row.title,
    },
    {
        name: 'Last Operation',
        selector: row => row.title,
    },
    {
        name: 'Last Date',
        selector: row => row.year,
    }
];

const data = [
    {
        id: 1,
        title: 'Beetlejuice',
        year: '1988',
    }
]
const customStyles={
  rows: {
    style: {
     backgroundColor:"#FFF"
    },
},
headCells: {
    style: {
        paddingLeft: '8px', 
        paddingRight: '8px',
        backgroundColor:"#C1C1C1",
        borderRight: "1px solid black"

    },
},
cells: {
    style: {
        paddingLeft: '8px', 
        paddingRight: '8px',
    },
},
}
  return (
    <DataTable
    columns={columns}
    data={data}
    customStyles={customStyles}
    pointerOnHover
    responsive
    selectableRows
    selectableRowsHighlight
    selectableRowsRadio="radio"
    fixedHeaderScrollHeight="700px"
    highlightOnHover
    dense
  />
  );
};

export default ImportsRun;