import * as React from "react";
import { render } from "react-dom";

import ColorHash from "color-hash-ts";

import "./styles.css";

// you can make adjustment here
const colorHash = new ColorHash();

function stringToHex(str: string): string {
  return colorHash.hex(str);
}

function App() {
  const [values, setValues] = React.useState<string[]>([]);

  return (
    <div className="App">
      <h1>color hash ts</h1>
      <h2>Generate a color based on the given string</h2>
      <div />
      <input
        placeholder="Write something..."
        value={values[values.length - 1]}
        onChange={e => {
          setValues([...values, e.target.value]);
        }}
      />
      <ul id="history">
        {values.length !== 0 &&
          values.map((value, i) => {
            const hex = stringToHex(value);
            return (
              <li
                key={`${i}=${value}`}
                style={{ borderLeftColor: hex, color: hex }}
              >
                <span className="hex">{hex.toUpperCase()}</span>
                <span className="text">{value}</span>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
