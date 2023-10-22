import { useForm } from "react-hook-form";

import { useMutation } from "@tanstack/react-query";

import Swal from "sweetalert2";

import { useNavigate } from "react-router-dom";

import { toast } from "sonner";

import Input from "../Input/Input";

import { postUserFn } from "../../api/users";

import { useSession } from "../../stores/useSession";

const RegisterForm = () => {
// Zustand
const {login} = useSession();

// RRD
const navigate = useNavigate();


// RHF
const {
    register, 
    formState: {errors},
    handleSubmit: onSubmitRHF,
    } = useForm();
        

// Tanstack Query     
const {mutate: postUser} = useMutation({
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
    postUser({...data, isAdmin: false});
    };
      
// Render    
    return (
        <form onSubmit={onSubmitRHF(handleSubmit)} className="row">
            <div className="col-12 col-md-6">
            <Input
            label='Name'
            name='firstname'
            className='mb-2'
            register={register}
            error={!!errors?.firstname}
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
        <p className='text-danger'>{errors.firstname?.message}</p>
        </div>
            <div className="col-12 col-md-6">
            <Input
            label='Lastname'
            name='lastname'
            className='mb-2'
            register={register}
            error={!!errors?.lastname}
            options={{
                required: true,
            minLength: {
                value: 3,
                message: 'This field has a minimum of 3 characters.',
              },
            maxLength: {
                value: 35,
                message: 'This field has a maximum of 35 characters.',
              },
        }}
        required/>
        <p className='text-danger'>{errors.lastname?.message}</p>
            </div>
            <div className="col-12 col-md-6">
            <Input
            label='Username'
            name='username'
            register={register}
            error={!!errors?.username}
            options={{
                required: true,
            minLength: {
                value: 3,
                message: 'This field has a minimum of 3 characters.',
              },
            maxLength: {
                value: 25,
                message: 'This field has a maximum of 25 characters.',
              },
        }}
        required/>
        <p className='text-danger'>{errors.username?.message}</p>
            </div>
            <div className="col-12 col-md-6">
            <Input
            label='Password'
            type='password'
            name='password'
            register={register}
            error={!!errors?.password}
            options={{
                required: true,
                pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/,
                    message: 'The password must have at least one lowercase letter, one uppercase letter, one number, one special character, and at least 8 characters in total.',
                },
            }}
            required/>
            <p className='text-danger'>{errors.password?.message}</p>
            </div>
            <div className="text-end">
            <button className="btn-sign-up mt-3" type="submit">Sign up</button>
            </div>
        </form>
    );
};

export default RegisterForm;