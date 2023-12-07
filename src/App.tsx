import ReactDOM from "react-dom";
import { useState } from "react";

import { Select } from "./components";

import "./App.css";

function App() {
  const [selectedValue, setSelectedValue] = useState("");

  const selectStyles = {
    containerStyle: { borderRadius: '5px' },
    valueContainerStyle: { backgroundColor: 'transparent'},
    arrowContainerStyle: { color: 'salmon' },
    dropdownMenuStyle: { backgroundColor: 'salmon' },
    dropdownMenuOptionStyle: { padding: '8px' },
  }

  const handleSelectChange = (selectedValue: string) => {
    setSelectedValue(selectedValue);
  };

  const optionsValues = [
    { value: "Oleg", title: "oleg" },
    { value: "Sol", title: "sol" },
    { value: "Max", title: "max" },
  ];

  return (
    <div style={{ overflow: "hidden", height: 70 }}>
      <Select
        title={`Name`}
        value={selectedValue}
        options={optionsValues}
        onChange={handleSelectChange}
        {...selectStyles}
      />
    </div>
  );
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
