import { useEffect, useState } from "react";

import Appointment  from "./Appointment"
import AppointmentList from "./AppointmentList"
import CardList from "./CardList";

const appointmentsLS = JSON.parse(localStorage.getItem('appointments')) || [];

const App9 = () => {
    const [appointments, setAppointment] = useState(appointmentsLS);
    
    useEffect(() => {
        localStorage.setItem('appointments', JSON.stringify(appointments));
      }, [appointments]);

  return (
        <section>
            <Appointment setAppointment={setAppointment}/>
            <AppointmentList turnos={appointments} setAppointment={setAppointment}/>
            <CardList turnos={appointments} setAppointment={setAppointment}/>
        </section>
  )
}
export default App9;