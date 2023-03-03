import React, { useState } from "react";
import DataTable from "react-data-table-component";
import * as XLSX from "xlsx";

export const FileInput = () => {
  const [columns, setColumns] = useState([]);
  const [data, setData] = useState([]);

  const handleChange = (e) => {
    const files = e.target.files;
    const fileReader = new FileReader();

    fileReader.readAsArrayBuffer(files[0]);

    fileReader.onload = (event) => {
      const bufferArray = event.target.result;
      const wb = XLSX.read(bufferArray, { type: "buffer" });
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      const data = XLSX.utils.sheet_to_json(ws);

      const cols = [];
      Object.keys(data[0]).forEach((key) =>
        cols.push({
          name: key.toUpperCase(),
          selector: (row) => row[key],
          sortable: true,
        })
      );

      setData(data);
      setColumns(cols);
    };
  };

  return (
    <div>
      <input type="file" onChange={handleChange} />
      <DataTable
        title="Excel Data"
        columns={columns}
        data={data}
        dense
        fixedHeader
        Delayed
        highlightOnHover
        noHeader
        pagination
        pointerOnHover
        responsive
        selectableRows
        selectableRowsHighlight
        selectableRowsRadio="radio"
        fixedHeaderScrollHeight="700px"
        paginationPerPage={15}
        paginationRowsPerPageOptions={[10, 15, 20, 25, 30, 50, 100]}
      />
    </div>
  );
};
