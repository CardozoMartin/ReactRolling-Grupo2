import AppointmentList from "./AppointmentList";

const CardList = (props) => {
    const {appointments} = props;

    return (
    <section className="container row">
        {appointments.length === 0 && <p className='text-center'>No existen citas programadas aún</p>}
        {appointments.map((appointment)=>{
            return <AppointmentList key={appointment.id} appointment={appointment}/>
            })};
        </section>
    );
};

export default CardList;