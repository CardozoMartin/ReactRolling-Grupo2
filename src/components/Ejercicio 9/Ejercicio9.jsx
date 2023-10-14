import { useState } from "react";

// ---------------------------
// Ejercicio 9: Crear una aplicación web que permite cargar un formulario para registrar una cita en una veterinaria, todos los datos solicitados en el formulario deben ser obligatorios.
//La aplicación debe permitir borrar las citas y estas deben ser guardadas en el localstorage.
// ---------------------------



const Appointment = ({ addAppointment }) => {
    const [ownerName, setOwnerName] = useState('');
    const [petName, setPetName] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [symptoms, setSymptoms] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      
      if (!ownerName || !petName || !date || !time || !symptoms) {
        alert('All fields are mandatory.');
        return;
      }
  
      const newAppointment = {
        ownerName,
        petName,
        date,
        time,
        symptoms,
      };
  
      addAppointment(newAppointment);
  
      setOwnerName('');
      setPetName('');
      setDate('');
      setTime('');
      setSymptoms('');
    };
  
    return (
      <div>
        <h2>Register Appointment</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Owner's Name:</label>
            <input
              type="text"
              value={ownerName}
              onChange={(e) => setOwnerName(e.target.value)}
            />
          </div>
          <div>
            <label>Pet's Name:</label>
            <input
              type="text"
              value={petName}
              onChange={(e) => setPetName(e.target.value)}
            />
          </div>
          <div>
            <label>Date:</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div>
            <label>Time:</label>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>
          <div>
            <label>Symptoms:</label>
            <textarea
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
            />
          </div>
          <button type="submit">Add Appointment</button>
        </form>
      </div>
    );
  };
  
  export default Appointment;