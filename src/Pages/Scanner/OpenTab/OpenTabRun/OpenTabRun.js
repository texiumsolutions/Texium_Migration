import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Card } from "../../../../components/Card/Card";

export const OpenTabRun = () => {
  const [sourceFileInfo, setSourceFileInfo] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/sourceFileInfo")
      .then((response) => response.json())
      .then((data) => setSourceFileInfo(data))
      .catch((error) => alert(error));
  }, []);

  const handleSelectedRowsChange = (state) => {
    setSelectedRows(state.selectedRows);
  };

  console.log(selectedRows);

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
  const columnsToDisplay = columns.slice(0, -1);

  const data = sourceFileInfo.flatMap((info) => {
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

  return (
    <Card height={"calc(100vh - 200px)"}>
      <DataTable
        columns={columnsToDisplay.map((column) => ({
          name: column,
          selector: column,
        }))}
        data={data}
        customStyles={customStyles}
        defaultSortAsc
        dense
        // omit
        fixedHeader
        Delayed
        highlightOnHover
        pagination
        pointerOnHover
        responsive
        selectableRows
        persistTableHead
        noDataComponent="No Data? Please Wait!"
        onSelectedRowsChange={handleSelectedRowsChange}
        selectableRowsHighlight
        selectableRowsRadio="radio"
        fixedHeaderScrollHeight="700px"
        paginationPerPage={20}
        paginationRowsPerPageOptions={[10, 15, 20, 25, 30, 50, 100]}
      />
    </Card>
  );
};
