import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { useLocation } from "react-router-dom";
import { Card } from "../../../../components/Card/Card";
import { v4 as uuidv4 } from "uuid";

export const OpenTabObjects = () => {
  const [objectInfo, setObjectInfo] = useState({});
  const location = useLocation();
  const id = location?.state?.id;

  useEffect(() => {
    const uri = `http://localhost:5000/testing/${id}`;
    fetch(uri)
      .then((response) => response.json())
      .then((data) => setObjectInfo(data))
      .catch((error) => alert(error));
  }, [id]);

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

  const data = objectInfo?.Files?.map((file) => {
    const id = uuidv4();
    const sizeInMB = (file.size / 1048576).toFixed(2) + " MB";
    const modifiedDate = new Date(file.modifiedDate).toLocaleString("en-BD", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
    });
    const createdDate = new Date(file.createdDate).toLocaleString("en-BD", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
    });

    return {
      id: id.slice(0, 8),
      Source_Type: objectInfo.Source_Type,
      Status: "Scanned",
      Is_Update: "False",
      Run_Number: parseInt(objectInfo.Run_Number) + 1,
      Directory_Path: objectInfo.Directory_Path,
      Started: time,
      Ended: time,
      name: file.name,
      size: sizeInMB,
      type: file.type,
      modifiedDate,
      createdDate,
    };
  });

  const columns = [
    {
      name: "Id",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Size",
      selector: (row) => row.size,
      sortable: true,
    },
    {
      name: "Type",
      selector: (row) => row.type,
      sortable: true,
    },
    {
      name: "Source Type",
      selector: (row) => row.Source_Type,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.Status,
      sortable: true,
    },
    {
      name: "Is Update",
      selector: (row) => row.Is_Update,
      sortable: true,
    },
    {
      name: "Run Number",
      selector: (row) => row.Run_Number,
      sortable: true,
    },
    {
      name: "Content Location",
      selector: (row) => row.Directory_Path,
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
    {
      name: "Modified Date",
      selector: (row) => row.modifiedDate,
      sortable: true,
    },
    {
      name: "Created Date",
      selector: (row) => row.createdDate,
      sortable: true,
    },
  ];

  return (
    <Card height={"calc(100vh - 200px)"}>
      <DataTable
        columns={columns}
        data={data}
        rowKey={(data) => data.id + data.name}
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
        selectableRowsHighlight
        pagination
        paginationPerPage={20}
        paginationRowsPerPageOptions={[10, 15, 20, 25, 30, 50, 100]}
      />
    </Card>
  );
};
