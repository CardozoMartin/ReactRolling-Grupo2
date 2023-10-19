import { useEffect, useState } from "react";

import AdminForm from "../../Admin/AdminForm/AdminForm";
import AdminTable from "../../Admin/AdminTable/AdminTable";


const blogsLS = JSON.parse(localStorage.getItem('blogs')) || [];

const AdminView = () => {
    const [blogs, setBlogs] = useState(blogsLS);

    useEffect(()=>{
        localStorage.setItem('blogs',JSON.stringify(blogs));
    },[blogs])

  return (
    <section className="container text-light text-center">
    <h1>Administration panel 🖥</h1>
    <hr className="w-50 container" />
    <AdminForm setBlogs={setBlogs} />
    <AdminTable blogs={blogs} setBlogs={setBlogs} />
    </section>
  )
}
export default AdminView;