import React from 'react'
import DataTable from 'react-data-table-component';
import { Card } from '../../components/Card/Card'
import { NavBar } from '../../Shared/NavBar/NavBar'

export const MigSets = () => {
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
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
    {
        id: 2,
        title: 'Orange',
        year: '1944',
    },
]
const customStyles={
  rows: {
    style: {
        minHeight: '72px',
    },
},
headCells: {
    style: {
        paddingLeft: '8px', 
        paddingRight: '8px',
        backgroundColor:"#C1C1C1",
        border: "1px solid black"

    },
},
cells: {
    style: {
        paddingLeft: '8px', 
        paddingRight: '8px',
        backgroundColor:"#F5F5F5"
    },
},
}
  return (
    <div className="container">
      <div className="nav_container">
        <NavBar />
      </div>
      
      <div className="content_container">
        <Card height="calc(100%)" width="calc(100%)">
          <h1>
            MigSets
          </h1>
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
      />
        </Card>
      </div>
    </div>
  )
}
