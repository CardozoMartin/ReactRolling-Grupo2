import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <section className="container text-center">
    <img className="w-50" src="https://i.postimg.cc/wj2xBkvb/ERROR-404.jpg" alt="error404" />
    <div className="text-center mb-4">
    <Link to={-1} className="btn btn-secondary">Back</Link>
    </div>
    </section>
  )
}
export default Error404;