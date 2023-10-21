import { useForm } from 'react-hook-form';

import { toast } from 'sonner';

import Swal from 'sweetalert2';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import Input from '../../components/Input/Input';
import Textarea from '../../components/Textarea/Textarea';

import { postBlogFn } from '../../api/blogs';


const AdminForm = () => {
// RHF
  const {
    register, 
    handleSubmit: onSubmitRHF, 
    formState: {errors},
    reset,
} = useForm();

// Tanstack Query

const queryClient = useQueryClient();

const {mutate: postBlog} = useMutation({
    mutationFn: postBlogFn,
    onSuccess: () => {
    Swal.close();
    toast.success('Blog successfully saved.');

    reset();

    queryClient.invalidateQueries('blogs');
    },
    onError: () => {
        Swal.close();
        toast.error('An error occurred while saving the blog.')
    }
})

// Handlers

  const handleSubmit = (data) => {
      postBlog(data);
      Swal.showLoading();
  };
  
  // Render
    return <form className='card p-3 w-50 container' onSubmit={onSubmitRHF(handleSubmit)} noValidate>
        <Input 
        register={register}
        options={{
            required: true,
            minLength: {
                value: 4,
                message: 'This field has a minimum of 4 characters.',
            },
            maxLength: {
                value: 60,
                message: 'This field has a maximum of 60 characters.',
            }
        }}
        label='Title'
        name='title'
        placeholder='Find your favorite recipe...'
        error={!!errors.title}
        />
        <p className='text-danger'>{errors.title?.message}</p>
        <Input 
        register={register}
        options={{
            required: true,
            minLength: {
                value: 4,
                message: 'This field has a minimum of 4 characters.',
            },
            pattern:{
                value: /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|webp|jpeg)/i,
                message: 'Please enter a valid link.',
            } 
        }}
        className='mt-2'
        type='url'
        label='Link to image'
        name='image-url'
        placeholder='Link to image'
        error={!!errors['image-url'] }
        required
        />
        <p className='text-danger'>{errors['image-url']?.message}</p>
        <Textarea 
        register={register}
        options={{
            required: true,
            minLength: {
                value: 4,
                message: 'This field has a minimum of 4 characters.',
            },
            maxLength: {
                value: 3500,
                message: 'This field has a maximum of 3500 characters.',
            }
        }}
        className='mt-2'
        label='Blog content'
        name='content'
        placeholder='Blog content'
        error={!!errors.content}
        />
        <p className='text-danger'>{errors.content?.message}</p>

        <div className='text-end'>
        <button type='submit' className='btn-save mt-3'>Save</button>
        </div>
    </form>
};

export default AdminForm;