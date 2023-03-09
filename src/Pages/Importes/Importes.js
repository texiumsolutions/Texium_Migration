import React, { useEffect, useState } from "react";
import { Card } from "../../components/Card/Card";
import { NavBar } from "../../Shared/NavBar/NavBar";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import { GoDiffAdded } from "react-icons/go";
import axios from "axios";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import Loading from "../../components/Loading/Loading";
// const columns = [
//   {
//     name: "ID",
//     selector: (row) => row.id,
//     sortable: true,
//   },
//   {
//     name: "Name",
//     selector: (row) => row.name,
//     sortable: true,
//   },
//   {
//     name: "Type",
//     selector: (row) => row.type,
//     sortable: true,
//   },
//   {
//     name: "Description",
//     selector: (row) => row.description,
//     sortable: true,
//   },
//   {
//     name: "Job Server Host",
//     selector: (row) => row.host,
//     sortable: true,
//   },
//   {
//     name: "Job Server Port",
//     selector: (row) => row.port,
//     sortable: true,
//   },
//   {
//     name: "Run Number",
//     selector: (row) => row.number,
//     sortable: true,
//   },
//   {
//     name: "Last Run Out",
//     selector: (row) => row.runout,
//     sortable: true,
//   },
//   {
//     name: "Last Run Status",
//     selector: (row) => row.runstatus,
//     sortable: true,
//   },
//   {
//     name: "Edit",
//     cell: (row) => <button onClick={() => console.log(row)}>Edit</button>,
//   },

//   {
//     name: "Delete",
//     cell: (row) => (
//       <button onClick={() => console.log(row)}>Delete</button>
//     ),
//   },
// ];
export const Importes = () => {
  const [sourceFileInfo, setSourceFileInfo] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((response) => response.json())
      .then((data) => setSourceFileInfo(data))
      .catch((error) => alert(error));
  }, []);

  const handleSelectedRowsChange = (state) => {
    setSelectedRows(state.selectedRows);
  };

  console.log(selectedRows);

  const customStyles = {
    headCells: {
      style: {
        backgroundColor: "#dddddd",
        borderRight: "1px solid var(--primary)",
        fontWeight: "900",
        color: "var(--primary)",
      },
    },
    cells: {
      style: {
        paddingLeft: "16px",
        paddingRight: "8px",
        borderRight: "1px solid var(--background)",
      },
    },
  };

  const columns =
    sourceFileInfo.length > 0 ? Object.keys(sourceFileInfo[0]) : [];
  const columnsToDisplay = columns.slice(0, -1);

  const data = sourceFileInfo.flatMap((info) => {
    const flatInfo = {};
    for (const key in info) {
      if (typeof info[key] === "object" && info[key] !== null) {
        for (const subKey in info[key]) {
          flatInfo[`${key}.${subKey}`] = info[key][subKey];
        }
      } else {
        flatInfo[key] = info[key];
      }
    }
    return flatInfo;
  });

  const handleDelete = id =>{
    const proceed = window.confirm('Are you sure to delete?');
    if(proceed){
      const url = `http://localhost:5000/users/${id}`
          fetch(url, {
            method:'DELETE'
          })
          .then(res => res.json())
          .then(data =>{
            console.log(data);
          })
    }
  }
  return (
    <div className="container">
      <div className="nav_container">
        <NavBar />
      </div>

      <div className="content_container">
        <Card height="calc(100%)" width="calc(100%)">
          <div
            style={{
              display: "flex",
              margin: "20px",
            }}
          >
            <div>
              <button>
                <Link
                  style={{
                    fontSize: "20px",
                    cursor: "pointer",
                    marginTop: "100px",
                  }}
                  to="/importers/importdetails/add"
                >
                  <GoDiffAdded></GoDiffAdded>
                </Link>
              </button>
              <button>
                {" "}
                <Link
                  style={{
                    fontSize: "20px",
                    cursor: "pointer",
                    margin: "10px",
                  }}
                  to="/importers/importdetails/details"
                >
                  <BiEdit></BiEdit>
                </Link>{" "}
              </button>
              <button
                style={{
                  fontSize: "20px",
                  cursor: "pointer",
                  margin: "10px",
                }}
                onClick={() => handleDelete(sourceFileInfo._id)}
              >
                <AiFillDelete></AiFillDelete>
              </button>
            </div>
            <h4>Importes data: {data.length}</h4>
          </div>

          <DataTable
            columns={columnsToDisplay.map((column) => ({
              name: column,
              selector: column,
            }))}
            data={data}
            customStyles={customStyles}
            defaultSortAsc
            dense
            fixedHeader
            Delayed
            highlightOnHover
            pagination
            pointerOnHover
            responsive
            selectableRows
            persistTableHead
            noDataComponent="No Data? Please Wait!"
            onSelectedRowsChange={handleSelectedRowsChange}
            selectableRowsHighlight
            selectableRowsRadio="radio"
            fixedHeaderScrollHeight="700px"
            paginationPerPage={20}
            paginationRowsPerPageOptions={[10, 15, 20, 25, 30, 50, 100]}
            
          />
          {/* <Link to="/importers/importdetails">Go the next page</Link> */}
        </Card>
      </div>
    </div>
  );
};
