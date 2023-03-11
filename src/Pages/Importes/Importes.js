import React, { useEffect, useState } from "react";
import { Card } from "../../components/Card/Card";
import { NavBar } from "../../Shared/NavBar/NavBar";
import DataTable from "react-data-table-component";
import { Link, useNavigate } from "react-router-dom";
import { GoDiffAdded } from "react-icons/go";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import useTesting from "../hooks/useTesting";

export const Importes = () => {
  const [sourceFileInfo, setSourceFileInfo] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const navigate = useNavigate();
  const allTesting = useTesting();

  useEffect(() => {
    fetch("http://localhost:5000/testing")
      .then((response) => response.json())
      .then((data) => setSourceFileInfo(data))
      .catch((error) => alert(error));
  }, []);

  const handleSelectedRowsChange = (rows) => {
    // setSelectedRows(state.selectedRows);
    if (rows && rows.selectedRows) {
      const selectedRow = rows.selectedRows[0];
      setSelectedRows(selectedRow);
      navigate(`/importers/importdetails/details `, { state: { data: rows } });
    }
  };

  // console.log(selectedRows);

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
  const handleDelete = (row) => {
    // const proceed = window.confirm('Are you sure to delete?');
    // if(proceed){
    //   const url = `http://localhost:5000/sourceFileInfo/${id}`
    //       fetch(url, {
    //         method:'DELETE'
    //       })
    //       .then(res => res.json())
    //       .then(data =>{
    //         console.log(data);
    //         const remaining = sourceFileInfo.filter(sourceFileInfo =>sourceFileInfo._id !== id);
    //         setSourceFileInfo(remaining);
    //       })
    // }
    // const hudai=  sourceFileInfo.map((fileInfo, index) => {return fileInfo})
    console.log(row);
  };

  const columns =
    sourceFileInfo.length > 0 ? Object.keys(sourceFileInfo[0]) : [];

  const colDisplay = columns.slice(0, -1);

  const columnsToDisplay = colDisplay.map((column) => ({
    name: column,
    selector: (row) => getField(row, column),
    sortable: true,
  }));
  const detailsButton = {
    cell: () => (
      <button onClick={() => alert("Will be done by Sumaya")}>Show</button>
    ),
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  };
  columnsToDisplay.push(detailsButton);
  // const deleteButton = {
  //   cell: () => (
  //     <button onClick={() => handleDelete(sourceFileInfo._id)}>Delete</button>

  //   ),
  //   ignoreRowClick: true,
  //   allowOverflow: true,
  //   button: true,
  // };

  const deleteButton = {
    cell: ({ row }) => (
      <button onClick={() => handleDelete(row)}>Delete</button>
    ),
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  };
  columnsToDisplay.push(deleteButton);

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

  const columnsWithButtons = columnsToDisplay.map((column) => {
    if (column.name === "Show") {
      return {
        ...column,
        cell: () => (
          <button onClick={() => alert("Will be done by Sumaya")}>Show</button>
        ),
      };
    } else if (column.name === "Delete") {
      return {
        ...column,
        cell: ({ row }) => (
          <button onClick={() => handleDelete(row)}>Delete</button>
        ),
      };
    } else {
      return column;
    }
  });
  

  const getField = (row, field) => {
    const fields = field.split(".");
    let value = row[fields[0]];
    for (let i = 1; i < fields.length; i++) {
      value = value?.[fields[i]];
    }
    return value;
  };

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
            columns={columnsWithButtons}
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
            subHeader
            subHeaderComponent={
              <input
                type="text"
                name="button"
                className="filter_input"
                placeholder="Search Here"
              />
            }
          />
          {/* <Link to="/importers/importdetails">Go the next page</Link> */}
        </Card>
      </div>
    </div>
  );
};
