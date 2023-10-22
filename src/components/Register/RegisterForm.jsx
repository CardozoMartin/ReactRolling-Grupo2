import { useForm } from "react-hook-form";

import Input from "../Input/Input";

const RegisterForm = () => {
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
                </div>
            </form>
          );
}
export default RegisterForm;