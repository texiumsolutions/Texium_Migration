import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Card } from "../../components/Card/Card";
import { NavBar } from "../../Shared/NavBar/NavBar";
import "./Jobs.css";

export const Jobs = () => {
  const customStyles = {
    rows: {
      style: {
        minHeight: "72px",
      },
    },
    headCells: {
      style: {
        paddingLeft: "8px",
        paddingRight: "8px",
        backgroundColor: "#C1C1C1",
      },
    },
    cells: {
      style: {
        paddingLeft: "8px",
        paddingRight: "8px",
        backgroundColor: "#F5F5F5",
      },
    },
  };
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/user")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  const columns = user.length > 0 ? Object.keys(user[0]) : [];
  return (
    <div className="container">
      <div className="nav_container">
        <NavBar />
      </div>

      <div className="content_container">
        <Card height="calc(100%)" width="calc(100%)">
          <h1>Jobs</h1>

          <DataTable
            title="Running Jobs (0 out of 0)"
            columns={columns.map((column) => ({
              name: column,
              selector: column,
            }))}
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
        </Card>
      </div>
    </div>
  );
};
