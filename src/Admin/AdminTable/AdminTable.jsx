import TableRow from "./TableRow";

const AdminTable = (props) => {
    const {blogs} = props;

  return (
    <section className="table-responsive mt-3 rounded container">
    <table className="table">
        <thead>
            <tr className="fs-5">
                <th>#</th>
                <th>Image:</th>
                <th>Title:</th>
                <th>Actions:</th>
            </tr>
        </thead>
        <tbody>
            {blogs.map((blog,index) => (
            <TableRow blog={blog} key={blog.id} index={index} />
            ))}
        </tbody>
    </table>
    </section>
  )
}
export default AdminTable;