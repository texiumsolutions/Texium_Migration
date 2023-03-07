import React, { useEffect, useState } from "react";
import { Card } from "../../components/Card/Card";
import { NavBar } from "../../Shared/NavBar/NavBar";
import DataTable from 'react-data-table-component';
import { Link } from "react-router-dom";

export const Importes = () => {

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
const [user, setUser] = useState([]);
useEffect(() => {
    fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setUser(data))
}, []);
const columns =
user.length > 0 ? Object.keys(user[0]) : [];
  return (
    <div className="container">
      <div className="nav_container">
        <NavBar />
      </div>

      <div className="content_container">
        <Card height="calc(100%)" width="calc(100%)">
          <h1>
            Importes data: {user.length}
          </h1>
        
          <DataTable
          
          columns={columns.map((column) => ({ name: column, selector: column }))}
        data={user}
        customStyles={customStyles}
        pointerOnHover
        responsive
        selectableRows
        selectableRowsHighlight
        selectableRowsRadio="radio"
        fixedHeaderScrollHeight="700px"
        highlightOnHover
        dense
        pagination
        paginationPerPage={20}
      />
      <Link to="/importers/importdetails">Go the next page</Link>
        </Card>
        
      </div>
      
    </div>
  );
};
