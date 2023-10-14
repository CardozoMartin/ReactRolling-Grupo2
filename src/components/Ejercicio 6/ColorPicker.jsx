const ColorPicker = (props) => {
    const {color, handleChange, disabled = false } = props;
    return <input type="color" className="color-picker" value={color} onChange={handleChange} disabled={disabled}/>
}
export default ColorPicker;