const AppointmentList = (props) => {
    const {appointment} = props;

    const handleDelete = (id) => {
        setAppointment((item) => item.filter((appointments) => appointments.id !== id));
      };
    
    return (
    <section className="bg-dark p-3 mt-4 col-5 m-2">
        <article>
            <p>Pet: {appointment.namePet}</p>
            <p>Owner: {appointment.owner}</p>
            <p>Phone: {appointment.phone}</p>
            </article>
            <div>
                <p>Date: {appointment.date}</p>
                <p>Time: {appointment.time}</p>
                <p>Symptoms: {appointment.symptoms}</p>
                </div>
                <button onClick={() => handleDelete(appointment.id)}>Delete</button>
                </section>
                );
            };
            
            export default AppointmentList;

            