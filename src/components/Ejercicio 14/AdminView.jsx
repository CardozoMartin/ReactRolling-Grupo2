import { useQuery } from "@tanstack/react-query";

import AdminTable from "../../Admin/AdminTable/AdminTable";
import AdminForm from "../../Admin/AdminForm/AdminForm";

import { getBlogsFn } from "../../api/blogs";


const AdminView = () => {
  const {
    data: blogs, 
    isLoading, 
    isError,
  } = useQuery({ queryKey: ['blogs'], queryFn: getBlogsFn });

  if (isError){
    return (
      <section className="container text-light text-center">
      <h1>Administration panel 🖥</h1>
      <hr className="w-50 container" />
      <AdminForm />
      <div className="alert alert-danger w-50 container mt-3">
        An error occurred loading the blogs</div>
      </section>
    )
  }

  return (
    <section className="container text-light text-center mt-5">
    <h1>Administration panel 🖥</h1>
    <hr className="w-50 container" />
    <AdminForm />
    {isLoading ? (<h3 className="mt-3 text-center">Loading ...</h3>
    ) : <AdminTable blogs={blogs} />
  }
  </section>
  )
}
export default AdminView;