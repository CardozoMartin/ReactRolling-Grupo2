import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { createRandomId } from '../../Utils';

// ---------------------------
// Ejercicio 9: Crear una aplicación web que permite cargar un formulario para registrar una cita
// en una veterinaria, todos los datos solicitados en el formulario deben ser
// obligatorios.
// La aplicación debe permitir borrar las citas y estas deben ser guardadas en el
// localstorage.
// ---------------------------

const AppointmentForm = () => {
  const {register, handleSubmit, formState: { errors }, reset} = useForm();
  const [appointment, setAppointment] = useState([]);
  const [formData, setFormData] = useState({});
    
    const newAppointment = (data) => {
      const newAppointmentData = {
      id: createRandomId(0,6000),
      appointment: data,
      };
      setAppointment([...appointment, newAppointmentData]);
      reset();
    };

    // const handleChange = (e) => {
    // setAppointment(e.target.value);
    // };

    // Cargar datos desde el localStorage al cargar el componente
    useEffect(() => {
    const dataFromLS = JSON.parse(localStorage.getItem('appointment')) || [];
    setAppointment(dataFromLS);
  }, []);

  // Guardar en localStorage cuando el formulario cambie
    useEffect(() => {
    localStorage.setItem('appointment', JSON.stringify(appointment));
  }, [appointment]);
    
    return (
      <>
        <form className='ninth-form container card' onSubmit={handleSubmit(newAppointment)} noValidate> {/* BORRAR DESPUES /> */}
        <div className='card-header fw-bold text-center'>🐱🐶🐵 ROLLING VET 🐭🐹🦝</div>
        <p className='text-center mt-2'>Fill out the form to create an appointment</p>
          <fieldset className='px-3'>
            <label htmlFor='name-input' className='form-label'>
              Pets Name:
            </label>
            <input
              type='text'
              id='name-input'
              className={`form-control ${errors.name ? 'is-invalid': ''}`}
              {...register('name', {
                required: 'This field is required.',
                minLength: {
                  value: 2,
                  message: 'This field has a minimum of 2 characters.',
                },
                maxLength: {
                  value: 20,
                  message: 'This field has a maximum of 20 characters.',
                },
              })}
              required
            />
            <p className='text-danger'>{errors.name?.message}</p>
          </fieldset>
          <fieldset className='px-3'>
            <label htmlFor='owner-input' className='form-label'>
              Owners Name:
            </label>
            <input
              type='text'
              id='owner-input'
              className={`form-control ${errors.owner ? 'is-invalid': ''}`}
              {...register('owner', {
                required: 'This field is required.',
                minLength: {
                  value: 3,
                  message: 'This field has a minimum of 3 characters.',
                },
                maxLength: {
                  value: 15,
                  message: 'This field has a maximum of 15 characters.',
                },
              })}
              required
            />
            <p className='text-danger'>{errors.owner?.message}</p>
          </fieldset>
          <fieldset className='mt-1 px-3'>
            <label htmlFor='phone-input' className='form-label'>
              Phone:
            </label>
            <input
              type='number'
              id='phone-input'
              className={`form-control ${errors.phone ? 'is-invalid': ''}`}
              {...register('phone', {
                required: 'Cell phone number is required.',
                pattern: {
                    value: /^\d+$/,
                    message: 'Enter only numeric digits.',
                },
                minLength: {
                value: 10,
                message: 'This field has a minimum of 10 characters.',
            },
            maxLength: {
            value: 15,
            message: 'This field has a maximum of 15 characters.',
            },
        })}
        required/>
        <p className='text-danger'>{errors.phone?.message}</p>
        </fieldset>
        <div className='date-time-container'>
        <fieldset className='mt-1 ps-3'>
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          className={`form-control ${errors.date ? 'is-invalid': ''}`}
          {...register('date', {
            required: 'The appointment date is mandatory.',
          })}
          required/>
        <p className='text-danger'>{errors.date?.message}</p>
        </fieldset>
        <fieldset className='mt-1 px-5'>
        <label htmlFor="time">Time:</label>
        <input
          type="time"
          id="time"
          className={`form-control ${errors.time ? 'is-invalid': ''}`}
          {...register('time', {
            required: 'Appointment time is mandatory.',
        })}
          required/>
        <p className='text-danger'>{errors.time?.message}</p>
        </fieldset>
        </div>
        <fieldset className='px-3'>
            <label htmlFor='sex-input' className='form-label'>Sex:</label>
            <select className={`form-select ${errors.sex ? 'is-invalid': ''}`} 
            id='sex-input'
            {...register('sex',{
                required: 'This field is required.',
            })}>
            <option value=''>Choose an option</option>
            <option value='Female'>Female</option>
            <option value='Male'>Male</option>
            </select>
            <p className='text-danger'>{errors.sex?.message}</p>
          </fieldset>
        <fieldset className='px-3'>
            <label htmlFor='age-input' className='form-label'>Age:</label>
            <select className={`form-select ${errors.age ? 'is-invalid': ''}`} 
            id='age-input'
            {...register('age',{
                required: 'This field is required.',
            })}>
            <option value=''>Choose an option</option>
            <option value='Puppy'>Puppy</option>
            <option value='Adult'>Adult</option>
            </select>
            <p className='text-danger'>{errors.age ?.message}</p>
          </fieldset>
        <fieldset className='mt-2 px-3'>
            <label htmlFor='symptoms-input' className='form-label'>Symptoms:
            </label>
            <textarea id='symptoms-input' className={`form-control ${errors.symptoms ? 'is-invalid': ''}`} 
            {...register('symptoms', {
              required: 'The description of symptoms is mandatory.',
              minLength: {
                value: 3,
                message: 'This field has a minimum of 3 characters.',
              },
              maxLength: {
                value: 30,
                message: 'This field has a maximum of 30 characters.',
              },
            })}
            required/>
            <p className='text-danger'>{errors.symptoms?.message}</p>
          </fieldset>
          <div className='text-end px-3'>
            <button type='submit' className='mt-3 mb-3 btn-schedule'>Schedule</button></div>
        </form>
        <hr />
        <ul className="listNinth list-group container card">
        {appointment.length === 0 && <p className='text-center mt-2'>There is no appointment yet.</p>}
        <div className='card-header fw-bold text-center'></div>
        {appointment.map((appointment) => (
        <li className="list-group-item d-flex align-items-center justify-content-between" key={appointment.id}>
          - Pets Name: {appointment.appointment.name}
          - Owner: {appointment.appointment.owner}
          - Phone: {appointment.appointment.phone}
          <div className='card-body'>
          - Date: {appointment.appointment.date}
          - Time: {appointment.appointment.time}
          - Pet Sex: {appointment.appointment.sex}
          - Pet Age: {appointment.appointment.age}
          - Symptoms: {appointment.appointment.symptoms}
          </div>
          <div className="card-footer text-body-secondary text-end">
          <button className="btn btn-warning rounded ms-3">x</button></div>
          </li>
          ))}
          </ul>
          </>
          );
        };
  
  export default AppointmentForm;