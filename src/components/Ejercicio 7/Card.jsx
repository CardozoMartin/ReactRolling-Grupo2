import { generateRandomAvatar } from "../../Utils";

const EmployeeCard = (props) => {
  const { employee } = props;
  const randomAvatarUrl = generateRandomAvatar();
  
  return (
  <section className="row">
  <div className="col-12 col-md-6">
  <li className='list-group-item list-employees'>
    <img
    alt={employee.fullName}
    src={randomAvatarUrl}
    className='avatar'/>
    <article>
      <h2 className='ms-4'>{employee.fullName}</h2>
      <div className='d-flex align-items-center'>
        <h6 className='mb-0 ms-5 fw-bold'>{employee.title}</h6>
        <p className='bg-employee mb-0 rounded text-light ms-3'>
          {employee.department}
          </p>
          </div>
          </article>
          </li>
          </div>
          </section>
    );
  };

  export default EmployeeCard;