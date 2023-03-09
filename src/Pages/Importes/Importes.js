import React, { useEffect, useState } from "react";
import { Card } from "../../components/Card/Card";
import { NavBar } from "../../Shared/NavBar/NavBar";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import { GoDiffAdded } from "react-icons/go";
import axios from "axios";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
const columns = [
  {
    name: "ID",
    selector: (row) => row.id,
    sortable: true,
  },
  {
    name: "Name",
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: "Type",
    selector: (row) => row.type,
    sortable: true,
  },
  {
    name: "Description",
    selector: (row) => row.description,
    sortable: true,
  },
  {
    name: "Job Server Host",
    selector: (row) => row.host,
    sortable: true,
  },
  {
    name: "Job Server Port",
    selector: (row) => row.port,
    sortable: true,
  },
  {
    name: "Run Number",
    selector: (row) => row.number,
    sortable: true,
  },
  {
    name: "Last Run Out",
    selector: (row) => row.runout,
    sortable: true,
  },
  {
    name: "Last Run Status",
    selector: (row) => row.runstatus,
    sortable: true,
  },
  {
    name: "Edit",
    cell: (row) => <button onClick={() => console.log(row)}>Edit</button>,
  },

  {
    name: "Delete",
    cell: (row) => (
      <button onClick={() => console.log(row)}>Delete</button>
    ),
  },
];
export const Importes = () => {
  const customStyles = {
    rows: {
      style: {
        backgroundColor: "#FFF",
      },
    },
    headCells: {
      style: {
        paddingLeft: "8px",
        paddingRight: "8px",
        backgroundColor: "#C1C1C1",
        borderRight: "1px solid black",
      },
    },
    cells: {
      style: {
        paddingLeft: "8px",
        paddingRight: "8px",
      },
    },
  };

  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:5000/users");
      setUser(result.data);
    };
    fetchData();
  }, []);

  // const columns = user.length > 1 ? Object.keys(user['']) : [];

  const [selectedRows, setSelectedRows] = useState([]);
  const handleSelectedRowsChange = (state) => {
    setSelectedRows(state.selectedRows);
    console.log(selectedRows);
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
                to=""
              >
                <AiFillDelete></AiFillDelete>
              </button>
            </div>
            <h4>Importes data: {user.length}</h4>
          </div>

          <DataTable
            // columns={columns.map((column) => ({
            //   name: column,
            //   selector: column,
            // }))}
            columns={columns}
            data={user}
            customStyles={customStyles}
            pointerOnHover
            responsive
            selectableRows
            onSelectedRowsChange={handleSelectedRowsChange}
            selectableRowsHighlight
            selectableRowsRadio="radio"
            fixedHeaderScrollHeight="700px"
            highlightOnHover
            dense
          />
          <Link to="/importers/importdetails">Go the next page</Link>
        </Card>
      </div>
    </div>
  );
};
