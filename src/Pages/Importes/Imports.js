import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import {
  AiOutlineDelete,
  AiOutlineEdit,
  AiOutlinePlusCircle,
  AiOutlineReload,
} from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { Card } from "../../components/Card/Card";
import { NavBar } from "../../Shared/NavBar/NavBar";
import "./Imports.css";

export const Imports = () => {
  const [sourceFileInfo, setSourceFileInfo] = useState([]);
  // const [selectedRows, setSelectedRows] = useState([]);
  // const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/testing")
      .then((response) => response.json())
      .then((data) => setSourceFileInfo(data))
      .catch((error) => alert(error));
  }, []);

  const handleSelectedRowsChange = (rows) => {
    if (rows && rows.selectedRows) {
      const selectedRow = rows.selectedRows[0];
      console.log(selectedRow);
      // setSelectedRows(selectedRows);
      // navigate(`/imports/importsTab/details`, {
      //   state: {
      //     name: selectedRow.Name,
      //     Description: selectedRow.Description,
      //     Last_Run_On: selectedRow.Last_Run_On,
      //     normalDate: selectedRow.normalDate,
      //     Run_Number: selectedRow.Run_Number,
      //     Type: selectedRow.Type,
      //     Id: selectedRow._id,
      //   },
      // });
    }
  };

  // handle Show
  const handleShow = (id) => {
    fetch(`http://localhost:5000/testing/${id}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
  };

  // handle delete
  const handleDelete = (id) => {
    if (!window.confirm("Are you sure you want to delete this row?")) {
      return;
    }

    fetch(`http://localhost:5000/testing/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const newSourceFileInfo = sourceFileInfo.filter(
            (row) => row._id !== id
          );
          setSourceFileInfo(newSourceFileInfo);
          alert("Row deleted successfully!");
        } else {
          alert("Failed to delete row");
        }
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to delete row");
      });
  };

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

  const colDisplay = columns.slice(0, -1);

  const columnsToDisplay = colDisplay.map((column) => ({
    name: column,
    selector: (row) => getField(row, column),
    sortable: true,
  }));

  // Show single data buttom
  const detailsButton = {
    cell: (row) => <button onClick={() => handleShow(row._id)}>Show</button>,
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  };

  // Delete button
  columnsToDisplay.push(detailsButton);
  const deleteButton = {
    cell: (row) => (
      <button onClick={() => handleDelete(row._id)}>Delete</button>
    ),
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  };
  columnsToDisplay.push(deleteButton);

  const data = sourceFileInfo.map((info) => {
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
        <Card height="calc(100vh)" width="calc(100%)">
          <div className="table_header">
            <button type="button">
              <Link
                className="table_header_link"
                to={"/imports/importsTab/add"}
              >
                <AiOutlinePlusCircle />
              </Link>
            </button>
            <button type="button">
              <Link className="table_header_link" to={""}>
                <AiOutlineEdit />
              </Link>
            </button>
            <button type="button">
              <Link className="table_header_link" to={""}>
                <AiOutlineDelete />
              </Link>
            </button>

            <button className="reload_btn" type="button">
              <AiOutlineReload />
            </button>
          </div>

          <DataTable
            columns={columnsToDisplay}
            data={data}
            customStyles={customStyles}
            defaultSortAsc
            dense
            fixedHeader
            Delayed
            highlightOnHover
            pointerOnHover
            responsive
            persistTableHead
            noDataComponent="No Data? Please Wait!"
            selectableRows
            onSelectedRowsChange={handleSelectedRowsChange}
            selectableRowsHighlight
            subHeader
            subHeaderComponent={
              <input
                type="text"
                name="button"
                className="filter_input"
                placeholder="Search Here"
              />
            }
            pagination
            paginationPerPage={15}
            paginationRowsPerPageOptions={[10, 15, 20, 25, 30, 50, 100]}
          />
        </Card>
      </div>
    </div>
  );
};
