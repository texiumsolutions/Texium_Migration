import React, { useEffect, useState } from "react";
import { Card } from "../../components/Card/Card";
import { NavBar } from "../../Shared/NavBar/NavBar";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import { GoDiffAdded } from "react-icons/go";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";

export const Importes = () => {
  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
    },
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Type",
      selector: (row) => row.type,
    },
    {
      name: "Description",
      selector: (row) => row.description,
    },
    {
      name: "Job Server Host",
      selector: (row) => row.host,
    },
    {
      name: "Job Server Port",
      selector: (row) => row.port,
    },
    {
      name: "Run Number",
      selector: (row) => row.number,
    },
    {
      name: "Last Run Out",
      selector: (row) => row.runout,
    },
    {
      name: "Last Run Status",
      selector: (row) => row.runstatus,
    }
  ];

  const data = [
    {
      id: 1,
      name: "Beetlejuice",
      type: "File Systems",
      description: "Descripton",
      host: "5000",
      port: "400",
      number: "77788",
      runout: "1988",
      runstatus: "1900088"
    },
    {
      id: 2,
      name: "Beetlejuice",
      type: "File Systems",
      description: "Descripton",
      host: "5000",
      port: "400",
      number: "77788",
      runout: "1988",
      runstatus: "1900088"
    },
    {
      id: 3,
      name: "Beetlejuice",
      type: "File Systems",
      description: "Descripton",
      host: "5000",
      port: "400",
      number: "77788",
      runout: "1988",
      runstatus: "1900088"
    },
    {
      id: 4,
      name: "Beetlejuice",
      type: "File Systems",
      description: "Descripton",
      host: "5000",
      port: "400",
      number: "77788",
      runout: "1988",
      runstatus: "1900088"
    },
  ];
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
              <Link
                style={{
                  fontSize: "20px",
                  cursor: "pointer",
                  margin: "10px",
                }}
                to="/importers/importdetails/details"
              >
                <GoDiffAdded></GoDiffAdded>
              </Link>
              <Link
                style={{
                  fontSize: "20px",
                  cursor: "pointer",
                  margin: "10px",
                }}
                to="/importers/importdetails/details"
              >
                <BiEdit></BiEdit>
              </Link>
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
            <h4>Importes</h4>
          </div>

          <DataTable
            columns={columns}
            data={data}
            customStyles={customStyles}
            pointerOnHover
            responsive
            selectableRows
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
