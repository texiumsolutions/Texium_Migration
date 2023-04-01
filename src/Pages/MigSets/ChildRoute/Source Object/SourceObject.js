import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { AiFillDelete } from "react-icons/ai";
import { BiPencil, BiSearchAlt } from "react-icons/bi";
import {
  HiOutlineAdjustmentsVertical,
  HiOutlineBars3BottomRight,
} from "react-icons/hi2";
import { MdFileDownload } from "react-icons/md";
import { TbShare } from "react-icons/tb";
import { Link } from "react-router-dom";
import { Card } from "../../../../components/Card/Card";

const SourceObject = () => {
  const [sourceFileInfo, setSourceFileInfo] = useState([]);

  useEffect(() => {
    fetch("https://texium-migration-server.onrender.com/sourceObjects")
      .then((response) => response.json())
      .then((data) => setSourceFileInfo(data))
      .catch((error) => alert(error));
  }, []);

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

  const colDisplay = columns.slice(0, -1);

  const columnsToDisplay = colDisplay.map((column) => ({
    name: column,
    selector: (row) => getField(row, column),
    sortable: true,
  }));

  const data = sourceFileInfo.map((info) => {
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

  const getField = (row, field) => {
    const fields = field.split(".");
    let value = row[fields[0]];
    for (let i = 1; i < fields.length; i++) {
      value = value?.[fields[i]];
    }
    return value;
  };
  return (
    <Card height="calc(100vh)" width="calc(100%)">
      <div className="table_header">
        <button type="button">
          <Link className="table_header_link" to={""}>
            <HiOutlineAdjustmentsVertical />
          </Link>
        </button>
        <button type="button">
          <Link className="table_header_link" to={""}>
            <MdFileDownload />
          </Link>
        </button>
        <button type="button">
          <Link className="table_header_link" to={""}>
            <BiSearchAlt />
          </Link>
        </button>
        <button type="button">
          <Link className="table_header_link" to={""}>
            <HiOutlineBars3BottomRight />
          </Link>
        </button>
        <button type="button">
          <Link className="table_header_link" to={""}>
            <BiPencil />
          </Link>
        </button>
        <button type="button">
          <Link className="table_header_link" to={""}>
            <TbShare />
          </Link>
        </button>
        <button type="button">
          <Link className="table_header_link" to={""}>
            <AiFillDelete />
          </Link>
        </button>
      </div>
      <h3>Source Object ({sourceFileInfo.length})</h3>
      <DataTable
        columns={columnsToDisplay}
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
        selectableRowsHighlight
        pagination
        paginationPerPage={15}
        paginationRowsPerPageOptions={[10, 15, 20, 25, 30, 50, 100]}
      />
    </Card>
  );
};

export default SourceObject;
