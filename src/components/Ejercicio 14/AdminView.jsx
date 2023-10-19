import AdminForm from "../../Admin/AdminForm/AdminForm";
import AdminTable from "../../Admin/AdminTable/AdminTable";

const AdminView = () => {
  return (
    <section className="container text-light text-center">
    <h1>Administration panel 🖥</h1>
    <hr />
    <AdminForm />
    <AdminTable />
    </section>
  )
}
export default AdminView;