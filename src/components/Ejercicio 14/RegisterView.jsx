import RegisterForm from "../Register/RegisterForm";

const RegisterView = () => {
  return (
    <section className="container mb-4 w-50">
    <h1 className="text-center text-light mt-5">Register</h1>
    <hr className="text-light" />
    <div className='bg-light rounded p-4'>
        {/* <div className="alert alert-info">The password must have at least one lowercase letter, one uppercase letter, one number, one special character, and at least 8 characters in total.</div> */}
        <RegisterForm /> 
    </div>
  </section>
  )
}
export default RegisterView;