import ColorPicker from "./ColorPicker";

const ColorItem = (props) => {
    const {color, handleDelete} = props;

  return (
    <article className="col-12 col-md-6 mb-3">
        <div className="card">
        <div className="card-header">
            <h3>{color.value}</h3>
        </div>
        <div className="card-body d-flex align-items-center gap-4 justify-content-center">
            <ColorPicker color={color.value} disabled />
            </div>
            <div className="card-footer text-body-secondary text-end">
                <button className="btn-eliminar fw-bold" type="button" onClick={() => handleDelete(color.id)}>Delete</button>
                </div>
                </div>
                </article>
                );
            };

export default ColorItem;