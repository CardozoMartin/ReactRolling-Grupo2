import { useForm } from "react-hook-form";

import { Link } from "react-router-dom";

import Input from "../Input/Input";

const LoginForm = () => {
const {
register, 
formState: {errors},
handleSubmit: onSubmitRHF,
} = useForm();


const handleSubmit = (data) => {
console.log(data);
};


  return (
    <form onSubmit={onSubmitRHF(handleSubmit)}>
        <Input
        label='Username'
        name='username'
        placeholder='Enter username'
        className='mb-2'
        register={register}
        error={!!errors?.username}
        />
        <Input
        label='Password'
        type='password'
        name='password'
        placeholder=''
        register={register}
        error={!!errors?.password}
        />
        <div>
        <button className="btn-sign-in mt-3" type="submit">Sign in</button>
        <p className="mb-0 mt-3">First time? <Link to='/register'>Sign up here</Link></p>
        </div>
    </form>
  );
};
export default LoginForm;