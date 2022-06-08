import React, { useState } from "react";
import Counter from "./Counter";
import CounterHooks from "./CounterHooks";
//
export const ThemeContext = React.createContext();

function App() {
  const [theme, setTheme] = useState("tomato");
  return (
    <ThemeContext.Provider value={{ backgroundColor: theme }}>
      <Counter initialCount={0} />
      <CounterHooks initialCount={0} />
      <button
        onClick={() =>
          setTheme((prevTheme) => {
            return prevTheme === "#7FFFD4" ? "#00FFFF" : "#7FFFD4";
          })
        }
      >
        Toggle Theme
      </button>
    </ThemeContext.Provider>
  );
}

export default App;
