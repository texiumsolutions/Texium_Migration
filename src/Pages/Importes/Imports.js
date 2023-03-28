import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import {
  AiOutlineDelete,
  AiOutlineEdit,
  AiOutlinePlusCircle,
  AiOutlineReload
} from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { Card } from "../../components/Card/Card";
import { NavBar } from "../../Shared/NavBar/NavBar";
import "./Imports.css";

export const Imports = () => {
  const [sourceFileInfo, setSourceFileInfo] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://texium-migration-server.onrender.com/testing")
      .then((response) => response.json())
      .then((data) => setSourceFileInfo(data))
      .catch((error) => alert(error));
  }, []);

  // handle Edit
  const handleEdit = (id) => {
    fetch(`https://texium-migration-server.onrender.com/testing/${id}`, {
      method: "GET",
    }).then((response) => response.json());

    navigate(`/imports/importsTab/details/${id}`);
  };

  // handle delete
  const handleDelete = (id) => {
    if (!window.confirm("Are you sure you want to delete this row?")) {
      return;
    }

    fetch(`https://texium-migration-server.onrender.com/testing/${id}`, {
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
  const showDetailsButton = {
    cell: (row) => (
      <button className="edit_button" onClick={() => handleEdit(row._id)}>
        <AiOutlineEdit />
      </button>
    ),
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  };

  // Delete button
  columnsToDisplay.push(showDetailsButton);
  const deleteButton = {
    cell: (row) => (
      <button className="delete_button" onClick={() => handleDelete(row._id)}>
        <AiOutlineDelete />
      </button>
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
