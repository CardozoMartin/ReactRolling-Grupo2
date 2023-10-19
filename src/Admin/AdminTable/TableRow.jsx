const TableRow = (props) => {
    const {blog,index} = props;

  return (
    <tr>
        <td className="fs-5">{index + 1}</td>
        <td>
            <img className="img-blog" src={blog['image-url']} alt={blog.title} />
        </td>
        <td className="fs-5">{blog.title}</td>
        <td>
            <button type="button" className="btn-edit">Edit</button>
            <button type="button" className="btn-delete ms-2 mt-5">Delete</button>
        </td>
    </tr>
  )
};
export default TableRow;