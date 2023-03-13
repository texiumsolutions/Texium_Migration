import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Test = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/testing')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  const handleDelete = (id) => {
    // axios.delete(`http://localhost:5000/testing/${id}`)
    //   .then(response => {
    //     setData(prevData => prevData.filter(item => item._id !== id));
    //     console.log(data)
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });
    // alert(id);
    fetch(`http://localhost:5000/testing/${id}`, {
      method:'DELETE'
    }).then((result) =>{
      result.json().then((res)=>{
         console.warn(res)
      })
    })
   
  }
  return (
    <div>
        <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Type</th>
          <th>Description</th>
          <th>Run Time</th>
          <th>Last Run On</th>
          <th>Last Run Status</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item._id}>
            <td>{item._id}</td>
            <td>{item.fileName}</td>
            <td>{item.dropdown}</td>
            <td>{item.description}</td>
            <td>{item.run_time}</td>
            <td>{item.last_run_on}</td>
            <td>{item.last_run_status}</td>
            <td><button onClick={() => handleDelete(item._id)}>Delete</button></td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default Test;