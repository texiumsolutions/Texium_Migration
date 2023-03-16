import React from "react";

const TestChild = ({ data }) => {
  const { _id,fileName, dropdown,description,run_time, last_run_on,last_run_status } = data;
  
  return (
    <div>
      <tr>
        <td>{_id}</td>
        <td>{fileName}</td>
        <td>{dropdown}</td>
        <td>{description}</td>
        <td>{run_time}</td>
        <td>{last_run_on}</td>
        <td>{last_run_status}</td>
        <td>
          <button >Delete</button>
        </td>
      </tr>
    </div>
  );
};

export default TestChild;
