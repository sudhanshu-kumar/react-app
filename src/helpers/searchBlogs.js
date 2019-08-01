export const searchBlogs = (blogs, searchText) => {
    console.log(typeof(blogs[0].title))
    if(blogs) return blogs.filter((blog) => blog.title.toLowerCase().indexOf(searchText.toLowerCase()) !== -1)
}