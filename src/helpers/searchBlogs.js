import { isArray } from "util";

export const searchBlogs = (blogs, searchText) => {
  if (isArray(blogs) && blogs.length > 0)
    return blogs.filter(
      blog => blog.title.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
    );
};
