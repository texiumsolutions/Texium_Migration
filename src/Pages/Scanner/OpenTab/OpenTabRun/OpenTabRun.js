import React from "react";
import DataTable from "react-data-table-component";
import { useLocation, useNavigate } from "react-router-dom";
import { Card } from "../../../../components/Card/Card";

export const OpenTabRun = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleSelectedRowsChange = (state) => {
    navigate(`/scanner/openTab/objects`, {
      state: { id: state.selectedRows[0].id },
    });
  };
  const Description = location.state?.Description;
  const Last_Run_On = location.state?.Last_Run_On;
  const Run_Number = location.state?.Run_Number;
  const _id = location.state?._id;

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

  const time = new Date().toLocaleString("en-BD", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  });

  const data = [
    {
      id: _id,
      Run_Number: parseInt(Run_Number) + 1,
      Description: Description,
      Objects_Processed: Last_Run_On,
      Status: "Finished",
      Started: time,
      Ended: time,
    },
  ];

  const columns = [
    {
      name: "Id",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Run Number",
      selector: (row) => row.Run_Number,
      sortable: true,
    },
    {
      name: "Description",
      selector: (row) => row.Description,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.Status,
      sortable: true,
    },
    {
      name: "Started",
      selector: (row) => row.Started,
      sortable: true,
    },
    {
      name: "Ended",
      selector: (row) => row.Ended,
      sortable: true,
    },
  ];

  return (
    <Card height={"calc(100vh - 200px)"}>
      <DataTable
        columns={columns}
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
        fixedHeaderScrollHeight="700px"
        selectableRows
        onSelectedRowsChange={handleSelectedRowsChange}
        selectableRowsHighlight
        pagination
        paginationPerPage={20}
        paginationRowsPerPageOptions={[10, 15, 20, 25, 30, 50, 100]}
      />
    </Card>
  );
};
