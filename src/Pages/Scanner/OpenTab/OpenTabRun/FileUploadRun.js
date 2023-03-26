import React from "react";
import DataTable from "react-data-table-component";
import { useLocation } from "react-router-dom";
import { Card } from "../../../../components/Card/Card";
import { NavBar } from "../../../../Shared/NavBar/NavBar";

export const FileUploadRun = () => {
  const location = useLocation();
  const fileData = location?.state?.dataFiles;
  const directoryPath = location?.state.directoryPath;

  const fileRows = Array.isArray(fileData)
    ? fileData.map((file) => {
        return {
          name: file.name,
          size: file.size,
          type: file.type,
          modifiedDate: file.modifiedDate,
          createdDate: file.createdDate,
          directoryPath: directoryPath,
        };
      })
    : [];

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

  const columns = [
    {
      name: "File Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "File Size",
      selector: (row) => row.size,
      sortable: true,
      format: ({ size }) => {
        return `${(size / (1024 * 1024)).toFixed(2)} MB`;
      },
    },
    {
      name: "Content Location",
      selector: (row) => row.directoryPath,
      sortable: true,
    },
    {
      name: "File Type",
      selector: (row) => row.type,
      sortable: true,
    },
    {
      name: "Modified Date",
      selector: (row) => row.modifiedDate,
      sortable: true,
      format: ({ modifiedDate }) => {
        return new Date(modifiedDate).toLocaleString();
      },
    },
    {
      name: "Created Date",
      selector: (row) => row.createdDate,
      sortable: true,
      format: ({ createdDate }) => {
        return new Date(createdDate).toLocaleString();
      },
    },
  ];

  return (
    <div className="container">
      <div className="nav_container">
        <NavBar />
      </div>

      <div className="content_container">
        <Card height={"calc(100vh)"} width={"100%"}>
          <DataTable
            columns={columns}
            data={fileRows}
            customStyles={customStyles}
            defaultSortAsc
            dense
            fixedHeader
            highlightOnHover
            pointerOnHover
            responsive
            persistTableHead
            noDataComponent="No Data? Please Wait!"
            fixedHeaderScrollHeight="700px"
            pagination
            paginationPerPage={20}
            paginationRowsPerPageOptions={[10, 15, 20, 25, 30, 50, 100]}
          />
        </Card>
      </div>
    </div>
  );
};
