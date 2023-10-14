import { generateRandomAvatar } from "../../Utils";

const EmployeeCard = (props) => {
    const { employee } = props;
  
    const randomAvatarUrl = generateRandomAvatar()
  
    return (
      <li className='list-group-item d-flex align-items-center'>
        <img
          src={randomAvatarUrl}
          alt={employee.fullName}
          className='employee-avatar'
        />
        <div>
          <h3 className='mb-2'>{employee.fullName}</h3>
          <div className='d-flex gap-2 align-items-center'>
            <h6 className='mb-0'>{employee.title}</h6>
            <p className='bg-info mb-0 px-2 rounded text-light'>
              {employee.department}
            </p>
          </div>
        </div>
      </li>
    );
  };
  export default EmployeeCard;