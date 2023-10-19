import AdminForm from "../../Admin/AdminForm/AdminForm";
import AdminTable from "../../Admin/AdminTable/AdminTable";

const getBlogsFn = async () => {
  const res = await fetch('http://localhost:3000/blogs');

  if(!res.ok){
    throw new Error ('An error occurred while bringing the blogs');
  }

  const data = await res.json();

  return data;
}

const AdminView = () => {
  const {data, isLoading, isError} = useQuery(['blogs'], getBlogsFn);

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