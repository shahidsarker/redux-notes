import React from "react";
import "./App.css";

import NewNote from "./NewNote";
import Notes from "./Notes";

const App = () => {
  const filterSelected = (value) => {
    console.log(value);
  };

  return (
    <div className="App">
      <NewNote />
      <div>
        all
        <input
          type="radio"
          name="filter"
          onChange={() => filterSelected("ALL")}
        />
        important
        <input
          type="radio"
          name="filter"
          onChange={() => filterSelected("IMPORTANT")}
        />
        unimportant
        <input
          type="radio"
          name="filter"
          onChange={() => filterSelected("UNIMPORTANT")}
        />
      </div>
      <Notes />
    </div>
  );
};

export default App;
