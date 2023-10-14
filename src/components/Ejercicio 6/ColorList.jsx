import ColorItem from "./ColorItem";


const ColorList = (props) => {
  const {colors, setColors} = props;

  const handleDelete = (id) => {
    const newList = colors.filter((item) => item.id !== id);
    setColors(newList);
};

  return <section className="row mt-3">
    {colors.map((color) => <ColorItem color={color} key={color.id} handleDelete={handleDelete} />)}
  </section>
};

export default ColorList;