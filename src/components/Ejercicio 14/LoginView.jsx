import LoginForm from "../Login/LoginForm";

const LoginView = () => {
  return (
    <section className="container mb-4">
    <h1 className="text-center text-light mt-5 fw-bold">Welcome</h1>
    <hr className="text-light" />
    <div className='bg-light rounded p-4 '>
      <article className='row'>
        <div className='col-12 col-md-6 mb-2'>
        <LoginForm />
        </div>
        <div className='col-12 col-md-6'>
          <img
            src='https://i.ytimg.com/vi/eQHg4vl6bb8/maxresdefault.jpg'
            alt='La cocinita de Ezequielito'
            className='w-100 rounded'
          />
        </div>
      </article>
    </div>
  </section>
  )
}
export default LoginView;