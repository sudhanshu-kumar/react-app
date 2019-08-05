import { isArray } from "util";

export const searchBlogs = (blogs, searchText) => {
    console.log(searchText)
    console.log(typeof(blogs[0].title))
    if(isArray(blogs) && blogs.length > 0) return blogs.filter((blog) => blog.title.toLowerCase().indexOf(searchText.toLowerCase()) !== -1)
}