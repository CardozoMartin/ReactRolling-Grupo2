import {create} from 'zustand';

export const useBlog = create((set) => ({
    blog: null,
    setBlogToEdit: (blog) => set ({blog}),
    clearBlog: () => set ({blog: null}),
}));