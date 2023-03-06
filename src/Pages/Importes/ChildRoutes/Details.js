import React from "react";
import '../Imports.css';

const Details = () => {
  return (
    <div>
      <form>
        <div className="details_form_imports">
          <div className="Imports_soruce_type_left">
            <p>Source Type</p>
            <label>
              <span>Name:</span>
              <input type="text" placeholder="Type Your Name" required />
            </label>

            <label>
              <span>Type:</span>

              <select>
                <option value="Option 01">Option 01</option>
                <option value="Option 02">Option 02</option>
                <option value="Option 03">Option 03</option>
              </select>
            </label>

            <label>
              <span>Description:</span>
              <input type="text" placeholder="Type here" required />
            </label>
          </div>

          <div>
            <p> Parameters</p>
            <label>
              <span>Input:01</span>
              <input type="text" placeholder="Type here" required />
            </label>

            <label>
              <span>Source</span>
              <input
                type="text"
                placeholder="Type here"
                className=""
                required
              />
            </label>

            <label className="">
              <span className="">Input 07:</span>
              <input
                type="text"
                placeholder="Type here"
                className="ep-input p-1"
                required
              />
            </label>

            <label className="">
              <span className="">Input 11:</span>
              <input
                type="text"
                placeholder="Type here"
                className=""
                required
              />
            </label>

            <label className="">
              <span className="">Input 12:</span>
              <input
                type="text"
                placeholder="Type here"
                className=""
                required
              />
            </label>
          </div>
        </div>
        <input className="" type="submit" value="Create Profile" />
      </form>
    </div>
  );
};

export default Details;
