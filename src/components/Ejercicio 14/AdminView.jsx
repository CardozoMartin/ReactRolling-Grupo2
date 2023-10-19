import { useQuery } from "@tanstack/react-query";

import AdminForm from "../../Admin/AdminForm/AdminForm";
import AdminTable from "../../Admin/AdminTable/AdminTable";

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
      <div className="alert alert-danger">
        An error occurred loading the blogs</div>
      </section>
    )
  }


  return (
    <section className="container text-light text-center">
    <h1>Administration panel 🖥</h1>
    <hr className="w-50 container" />
    <AdminForm />
    {isError && (<div className="alert alert-danger">
      An error occurred loading the blogs</div>)}
    {isLoading ? (<h3 className="mt-3 text-center">Loading ...</h3>
    ) : <AdminTable blogs={blogs} />
  }
    </section>
  )
}
export default AdminView;