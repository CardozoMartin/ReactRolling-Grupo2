const Input = (props) => {
    const {placeholder, label, type, name, options, register} = props;

  return (
    <fieldset className="form-floating text-dark">
            <input 
            type={type}
            id={`${name}-input`} 
            className="form-control" 
            placeholder={placeholder}
            {...register('title',options)}
            />
            <label htmlFor={`${name}-input`}>{label}:</label>
        </fieldset>
  )
};
export default Input;