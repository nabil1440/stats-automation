import React from "react";

// This is Rafid's part
import "../Rafid.css";

const Form = () => {
  return (
    <div className="form">
      <form>
        <input
          type="text"
          className="search-input"
        />
        <button type="submit" className="submit-btn">Calculate</button>
      </form>
    </div>
  );
};

export default Form;
