import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [selectValue, setSelectValue] = useState();
  const [multiplier, setMultiplier] = useState();
  const [product, setProduct] = useState();

  const data = [
    { id: "1", multiplier: 2, base: 3 },
    { id: "2", multiplier: 5, base: 2 },
    { id: "3", multiplier: 3, base: 8 },
  ];

  const [base, setBase] = useState();

  useEffect(() => {
    setSelectValue(data[0].id);
    setBase(data[0].base);
    setMultiplier(data[0].multiplier);
  }, []);

  useEffect(() => {
    setProduct(base * multiplier);
  }, [base, multiplier]);

  return (
    <>
      <select
        value={selectValue}
        onChange={(e) => {
          const newValue = e.target.value;
          setSelectValue(newValue);
          const selected = data.find((item) => item.id === newValue);
          setBase(selected.base);
          setMultiplier(selected.multiplier);
        }}
      >
        {data.map((item) => (
          <option key={item.id} value={item.id}>
            {item.id}
          </option>
        ))}
      </select>
      <p>Preset: {selectValue}</p>
      <p>Product: {product}</p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <label htmlFor="multiplier">multiplier</label>
        <input
          id="multiplier"
          type="range"
          value={multiplier}
          max={10}
          min={2}
          onChange={(e) => setMultiplier(e.target.value)}
        ></input>
        <span>{multiplier}</span>
        <label htmlFor="base">base</label>
        <input
          id="base"
          type="range"
          value={base}
          max={10}
          min={2}
          onChange={(e) => setBase(e.target.value)}
        ></input>
        <span>{base}</span>

        <button
          onClick={() => {
            const refresh = data.find((item) => item.id === selectValue);
            setBase(refresh.base);
            setMultiplier(refresh.multiplier);
          }}
        >
          refresh
        </button>
      </div>
      <p>presets: {JSON.stringify(data)}</p>
    </>
  );
}

export default App;
