import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { FaPause, FaPlay, FaSquare } from "react-icons/fa";
import { IoReloadCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { Card } from "../../components/Card/Card";
import { NavBar } from "../../Shared/NavBar/NavBar";
import "./Scanner.css";

export const Scanner = () => {
  const [sourceFileInfo, setSourceFileInfo] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/sourceFileInfo")
      .then((response) => response.json())
      .then((data) => setSourceFileInfo(data))
      .catch((error) => alert(error));
  }, []);

  const handleSelectedRowsChange = (rows) => {
    if (rows && rows.selectedRows) {
      const selectedRow = rows.selectedRows[0];
      setSelectedRows(selectedRow);
      navigate(`/scanner/openTab/details`, { state: { data: rows } });
    }
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
  const detailsButton = {
    cell: () => (
      <button onClick={() => alert("Will be done by Sumaya")}>Show</button>
    ),
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  };
  columnsToDisplay.push(detailsButton);

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
              <FaPlay />
            </button>
            <button type="button">
              <FaPause />
            </button>
            <button type="button">
              <FaSquare />
            </button>

            <button className="reload_btn" type="button">
              <IoReloadCircle />
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
