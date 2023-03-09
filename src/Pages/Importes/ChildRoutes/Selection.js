import React from "react";
import DataTable from "react-data-table-component";

const Selection = () => {
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
    },
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
      runstatus: "1900088",
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
    <>
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
    </>
  );
};

export default Selection;
