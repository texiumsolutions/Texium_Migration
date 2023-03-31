import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { Card } from "../../../../components/Card/Card";

export const OpenTabObjectsMongo = () => {
  const location = useLocation();
  const objectInfo = location?.state?.data;
  const [data, setData] = useState([]);
  const [fileData, setFileData] = useState([]);

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

  useEffect(() => {
    if (objectInfo) {
      let newData = objectInfo?.map((file) => {
        const id = uuidv4();

        const childFiles = file.Files?.map((something) => {
          const sizeInMB = (something.size / 1048576).toFixed(2) + " MB";
          const modifiedDate = new Date(something.modifiedDate).toLocaleString(
            "en-BD",
            {
              month: "short",
              day: "numeric",
              year: "numeric",
              hour: "numeric",
              minute: "numeric",
              second: "numeric",
              hour12: true,
            }
          );
          const createdDate = new Date(something.createdDate).toLocaleString(
            "en-BD",
            {
              month: "short",
              day: "numeric",
              year: "numeric",
              hour: "numeric",
              minute: "numeric",
              second: "numeric",
              hour12: true,
            }
          );
          return {
            id: id.slice(0, 8),
            Source_Type: file.Source_Type,
            Status: "Scanned",
            Is_Update: "False",
            Run_Number: parseInt(file.Run_Number) + 1,
            Directory_Path: file.Directory_Path,
            Started: time,
            Ended: time,
            name: file.File_Name,
            size: sizeInMB,
            type: something.type,
            modifiedDate: modifiedDate,
            createdDate: createdDate,
          };
        });

        return childFiles;
      });

      setData(newData);
    }
  }, [objectInfo]);

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

  useEffect(() => {
    data?.forEach((el) => {
      el?.forEach((el2) => {
        setFileData((prevState) => [...prevState, el2]);
      });
    });
  }, [data]);

  return (
    <Card height={"calc(100vh - 200px)"}>
      <DataTable
        columns={columns}
        data={fileData}
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
