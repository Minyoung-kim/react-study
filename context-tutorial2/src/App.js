import React from "react";
import ColorBox from "./components/ColorBox";
import ColorContext from "./contexts/color";

function App() {
  return (
    <div>
      <ColorContext.Provider value={{ color: "red" }}>
        <div>
          <ColorBox />
        </div>
      </ColorContext.Provider>
    </div>
  );
}

export default App;
