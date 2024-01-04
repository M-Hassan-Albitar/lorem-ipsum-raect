import { useState } from "react";
import data from "./data";
import { nanoid } from "nanoid";

const App = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  const handleChange = (e) => {
    setCount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newArr = data.slice(0, count);
    setText(newArr);
  };

  return (
    <div className="section-center">
      <h4>TIRED OF BORING LOREM IPSUM?</h4>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="number">Paragraphs:</label>

        <input
          value={count}
          onChange={handleChange}
          type="number"
          name="number"
          id="number"
          min={1}
          max={8}
          step={1}
        />
        <button className="btn" type="submit">
          Generate
        </button>
      </form>
      <div className="lorem-text">
        {text.map((dt) => {
          const id = nanoid();
          return <p key={id}> {dt} </p>;
        })}
      </div>
    </div>
  );
};
export default App;
