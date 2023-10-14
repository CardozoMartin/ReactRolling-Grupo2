const ColorPicker = (props) => {
    const {color, handleChange} = props;
    return <input type="color" className="color-picker" value={color} onChange={handleChange}/>
}
export default ColorPicker;