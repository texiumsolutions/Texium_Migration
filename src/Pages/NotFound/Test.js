import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Test = () => {
  const { register, handleSubmit, reset } = useForm();
  const [name, setName] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  // const handleSubmit = (e) => {
  //    e.preventDefault();
  //   console.log(name); // the name value can be accessed here
  //  };
  const onSubmit = (data) => {
    console.log(data);

    fetch("http://localhost:5000/testing", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },

      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((inserted) => {
        if (inserted.insertedId) {
          alert("Added New Product Successfully");

          reset();
        } else {
          alert("Failed add to the data");
        }
      });
  };
  return (
    <div>
       <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" value={name} onChange={handleNameChange} {...register("fileName")} />
      <button type="submit">Submit</button>
    </form>
    </div>
  );
};

export default Test;