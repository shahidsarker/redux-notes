import React from "react";
import "./index.css";

import NewNote from "./NewNote";
import Notes from "./Notes";

const App = () => {
  return (
    <div>
      <NewNote />
      <Notes />
    </div>
  );
};

export default App;
