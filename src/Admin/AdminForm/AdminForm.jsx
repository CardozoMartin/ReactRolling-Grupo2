import { useForm } from "react-hook-form";

const AdminForm = () => {
  const {register, handleSubmit} = useForm();
  
    return <form>
        <fieldset className="form-floating text-dark">
            <input type="text" id="title-input" className="form-control" placeholder="Find your favorite recipe"/>
            <label htmlFor="title-input">Title:</label>
        </fieldset>
    </form>
};

export default AdminForm;