import { useMutation, useQueryClient } from "@tanstack/react-query";

import Swal from "sweetalert2";

import { toast } from "sonner";

import { deleteBlogFn } from "../../api/blogs";

const TableRow = (props) => {
    const {blog,index} = props;

    // Tanstack query
    const queryClient = useQueryClient();

    const {mutate: deleteBlog} = useMutation({
    mutationFn: deleteBlogFn,
    onSuccess: () => {
      Swal.close();
      toast.success('Deleted blog.');

      queryClient.invalidateQueries('blogs');
    },
    onError: () => {
      Swal.close();
      toast.error('An error occurred deleting the blog.');
    },
    });

    // Handlers
    const handleDelete = () => {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No',
      }).then((res) => {
        if (res.isConfirmed) {
          Swal.showLoading();
          deleteBlog(blog.id);
    }
  });
};

  // Render
  return (
    <tr>
        <td className="fs-5">{index + 1}</td>
        <td>
            <img className="img-blog" src={blog['image-url']} alt={blog.title} />
        </td>
        <td className="fs-5">{blog.title}</td>
        <td>
            <button type="button" className="btn-edit">Edit</button>
            <button type="button" className="btn-delete ms-2 mt-5" onClick={handleDelete}>Delete</button>
            </td>
    </tr>
  )
}
export default TableRow;