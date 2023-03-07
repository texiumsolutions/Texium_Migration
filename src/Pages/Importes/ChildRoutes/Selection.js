import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';

const Selection = () => {
   
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
      
  );
};

export default Selection;