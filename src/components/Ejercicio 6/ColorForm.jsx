import { useState } from "react";

import ColorPicker from "./ColorPicker";
import { createRandomId } from "../../Utils";

import './ejercicio6.css'

const ColorForm = (props) => {
  const {setColors} = props;

  const [color,setColor] = useState('#000000');

  const handleChange = (e) => {
    setColor(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newColor = {
      id: createRandomId(0, 6000),
      value: color,
    }
    setColors((prev) => [...prev, newColor]);

    setColor('#000000');
  };

  return (
    <form className="card" onSubmit={handleSubmit}>
        <div className="card-header fw-bold text-center">🌈 Manage colors 🌈</div>
        <div className="card-body d-flex align-items-center gap-4 justify-content-center">
          <ColorPicker color={color} handleChange={handleChange} />
          <p className="d-inline color-text">{color}</p>
          </div>
          <div className="card-footer text-body-secondary text-end">
            <button className="btn-guardar fw-bold" type="submit">Save</button>
            </div>
            </form>
            )
          };

export default ColorForm;