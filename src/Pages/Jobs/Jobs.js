import React from "react";
import DataTable from "react-data-table-component";
import { Card } from "../../components/Card/Card";
import { NavBar } from "../../Shared/NavBar/NavBar";
import "./Jobs.css";

export const Jobs = () => {
  const columns = [
    {
        name: 'ID',
        selector: row => row.id,
    },
    {
        name: 'Jobs Type',
        selector: row => row.year,
    },
    {
        name: 'Description',
        selector: row => row.description,
    },
    {
        name: 'Run Number',
        selector: row => row.year,
    },
    {
        name: 'Object Count',
        selector: row => row.title,
    },
    {
        name: 'Start',
        selector: row => row.year,
    },
    {
        name: 'End',
        selector: row => row.title,
    },
    {
        name: 'Status',
        selector: row => row.year,
    },
    {
        name: 'Progess',
        selector: row => row.title,
    },
    {
        name: 'Location',
        selector: row => row.year,
    },
    {
        name: 'Port Number',
        selector: row => row.title,
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
        paddingLeft: '8px', // override the cell padding for head cells
        paddingRight: '8px',
        backgroundColor:"#C1C1C1",
        border: "1px solid black"

    },
},
cells: {
    style: {
        paddingLeft: '8px', // override the cell padding for data cells
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
            Jobs
          </h1>
 
        <DataTable
        title="Running Jobs (0 out of 0)"
        columns={columns}
        data={data}
        customStyles={customStyles}
      />
        </Card>
      </div>
    </div>
  );
};
