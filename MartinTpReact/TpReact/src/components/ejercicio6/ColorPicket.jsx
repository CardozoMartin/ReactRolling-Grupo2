
import "../../css/ejercicio6.css"
const ColorPicket = (props) => {
    const {color, handleChange}= props
  return (
    <input type="color" className="color-picket" value={color} onChange={handleChange}></input>
  )
}

export default ColorPicket