import { useRef } from 'react';

import { createRandomId, isValidForm } from '../../Utils';

// ---------------------------
// Ejercicio 9: Crear una aplicación web que permite cargar un formulario para registrar una cita en una veterinaria, todos los datos solicitados en el formulario deben ser obligatorios.
//La aplicación debe permitir borrar las citas y estas deben ser guardadas en el localstorage.
// ---------------------------

// Appointment Form

const Appointment = (props) => {
  
  const {setAppointment} = props;

  const namePetRef = useRef();
  const ownerRef = useRef();
  const phoneRef = useRef();
  const dateRef = useRef();
  const timeRef = useRef();
  const symptomsRef = useRef();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const namePet = namePetRef.current.value.trim();
    const owner = ownerRef.current.value.trim();
    const phone = phoneRef.current.value.trim();
    const date = dateRef.current.value;
    const time = timeRef.current.value;
    const symptoms = symptomsRef.current.value.trim();
  
    if (isValidForm(namePet, owner, phone, date, time, symptoms)){
      alert('Congratulations! The appointment has been scheduled successfully ✅');
      setAppointment((appointments)=>[...appointments,
        {
          id:createRandomId(0, 10000),
          namePet: namePet,
          owner: owner,
          phone: phone,
          date: date,
          time: time,
          symptoms: symptoms,
        },
      ]);
    } else{
      alert('Please review and complete all information correctly.');
    }
    // setAppointment('');
  };

  
  return (
      <form onSubmit={handleSubmit} className='ninth-form container card'>
        <div className='card-header fw-bold text-center'>🐱🐶🐵 ROLLING VET 🐭🐹🦝</div>
        <p className='text-center mt-2'>Fill out the form to create an appointment</p>
        <div className='card-body'>
        <fieldset>
          <label htmlFor='name-pet-input' className='form-label'>Pets name:</label>
          <input ref={namePetRef} type='text' id='name-pet-input' className='form-control' name='namePet'/>
          </fieldset>
          <fieldset className='mt-3'>
            <label htmlFor='owner-input' className='form-label'>Owners name:</label>
            <input ref={ownerRef} type='text' id='owner-input' className='form-control' name='owner'/>
            </fieldset>
          <fieldset className='mt-3'>
            <label htmlFor='phone-input' className='form-label'>Phone:</label>
            <input ref={ownerRef} type='tel' id='phone-input' className='form-control' name='phone'/>
            </fieldset>
            <div className='d-flex justify-content-between'>
              <fieldset className='mt-3'>
                <label htmlFor='date-input' className='form-label'>Date:</label>
                <input ref={dateRef} type='date' id='date-input' className='form-control' name='date'/>
                </fieldset>
                <fieldset className='mt-3'>
                  <label htmlFor='time-input' className='form-label'>Time:</label>
                  <input ref={timeRef} type='time' id='time-input' className='form-control d-inline' name='time'/>
                  </fieldset>
                  </div>
                  <fieldset className='mt-4'>
                    <label htmlFor='symptoms-input' className='form-label'>Symptoms:</label>
                    <textarea ref={symptomsRef} type='text' id='symptoms-input' className='form-control' name='symptoms'/>
                    </fieldset>
                    </div>
                    <div className='text-end'>
                    <button type='submit' className='mt-3 mb-3 btn-schedule'>Schedule</button></div>
                    </form>
                    );
                  };

export default Appointment;
