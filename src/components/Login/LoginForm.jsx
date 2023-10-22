import { useForm } from "react-hook-form";

import { Link, useNavigate } from "react-router-dom";

import { useMutation } from "@tanstack/react-query";

import Input from "../Input/Input";

import { useSession } from "../../stores/useSession";

import { postUserFn } from "../../api/users";

import Swal from "sweetalert2";

import { toast } from "sonner";

const LoginForm = () => {
// Zustand
const {login} = useSession();

// RRD
const navigate = useNavigate();


const {
register, 
formState: {errors},
handleSubmit: onSubmitRHF,
} = useForm();

// Tanstack Query     
const {mutate: postLogin} = useMutation({
    mutationFn: postUserFn,
    onSuccess: (data) => {
    Swal.close();
    toast.success('Welcome ✨')

    // Loguear al usuario
        login({...data, password: undefined});

    // Navegar a inicio (ya logueado)
    navigate('/')
},
    onError: () => {
        Swal.close();
        toast.error('An error occurred while registering the user.');
    },
})

// Handlers
const handleSubmit = (data) => {
Swal.showLoading();
postLogin(data)
};

// Render
  return (
    <form onSubmit={onSubmitRHF(handleSubmit)} noValidate>
        <Input
        label='Username'
        name='username'
        placeholder='Enter username'
        className='mb-2'
        register={register}
        error={!!errors?.username}
        options={{
            required: true,
            minLength: {
                value: 2,
                message: 'This field has a minimum of 2 characters.',
              },
            maxLength: {
                value: 20,
                message: 'This field has a maximum of 20 characters.',
              },
        }}
        required/>
        <p className='text-danger'>{errors.username?.message}</p>
        <Input
        label='Password'
        type='password'
        name='password'
        placeholder=''
        register={register}
        error={!!errors?.password}
        options={{
            required: true,
            minLength: {
                value: 2,
                message: 'This field has a minimum of 2 characters.',
              },
            maxLength: {
                value: 25,
                message: 'This field has a maximum of 25 characters.',
              },
        }}
        required/>
        <p className='text-danger'>{errors.password?.message}</p>
        <div>
        <button className="btn-sign-in mt-3" type="submit">Sign in</button>
        <p className="mb-0 mt-3">First time? <Link to='/register'>Sign up here</Link></p>
        </div>
    </form>
  );
};
export default LoginForm;