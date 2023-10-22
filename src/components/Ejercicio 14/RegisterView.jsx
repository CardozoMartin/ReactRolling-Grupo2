import RegisterForm from "../Register/RegisterForm";

const RegisterView = () => {
  return (
    <section className="container mb-4 w-25">
    <h1 className="text-center text-light mt-5">Register</h1>
    <hr className="text-light" />
    <div className='bg-light rounded p-4'>
        <RegisterForm /> 
    </div>
  </section>
  )
}
export default RegisterView;