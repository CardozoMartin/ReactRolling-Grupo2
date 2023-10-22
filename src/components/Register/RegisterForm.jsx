import { useForm } from "react-hook-form";

import { useMutation } from "@tanstack/react-query";

import Input from "../Input/Input";

import { postUserFn } from "../../api/users";

const RegisterForm = () => {
// RHF

const {
    register, 
    formState: {errors},
    handleSubmit: onSubmitRHF,
    } = useForm();
        
// Tanstack Query     

const {mutate: postUser} = useMutation({
        mutationFn: postUserFn,
        onSuccess: () => {},
        onError: () => {},
    })


// Handlers        
        
    const handleSubmit = (data) => {
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
                minLength: 3,
                maxLength: 25,
            }}
            />
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
                minLength: 3,
                maxLength: 25,
            }}
            />
            </div>
            <div className="col-12 col-md-6">
            <Input
            label='Username'
            name='username'
            register={register}
            error={!!errors?.username}
            options={{
                required: true,
                minLength: 3,
                maxLength: 25,
            }}
            />
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
                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/
            }}
            />
            </div>
            <div className="text-end">
            <button className="btn-sign-up mt-3" type="submit">Sign up</button>
            </div>
        </form>
    );
};
export default RegisterForm;