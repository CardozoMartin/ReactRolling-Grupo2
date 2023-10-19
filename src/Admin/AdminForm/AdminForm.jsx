import { useForm } from 'react-hook-form';

import Input from '../../components/Input/Input';
import Textarea from '../../components/Textarea/Textarea';

const AdminForm = () => {
  const {register, handleSubmit: onSubmitRHF, formState: {errors}} = useForm();

  const handleSubmit = (data) => {
    console.log(data)
  }
  
    return <form className='card p-3 w-50 container' onSubmit={onSubmitRHF(handleSubmit)}>
        <Input 
        register={register}
        options={{
            required: true,
            minLength: 4,
            maxLength: 35,
        }}
        label='Title'
        name='title'
        placeholder='Find your favorite recipe...'
        error={!!errors.title}
        />
        <Input 
        register={register}
        options={{
            required: true,
            minLength: 4,
            pattern: /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|webp|jpeg)/i,
        }}
        className='mt-2'
        type='url'
        label='Link to image'
        name='image-url'
        placeholder='Link to image'
        error={!!errors['image-url'] }
        />
        <Textarea 
        register={register}
        options={{
            required: true,
            minLength: 4,
            maxLength: 3500,
        }}
        className='mt-2'
        label='Blog content'
        name='content'
        placeholder='Blog content'
        error={!!errors.content}
        />
        <div className='text-end'>
        <button type='submit' className='btn-save mt-3'>Save</button>
        </div>
    </form>
};

export default AdminForm;