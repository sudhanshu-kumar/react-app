import { isArray } from "util";

export const getTitles = (blogs) => {
    console.log(isArray(blogs))
    if(isArray(blogs) && blogs.length > 0) {
        return blogs.map((blog) => blog.title)
    }
    return []
}

export const filteredTitles = (blogs) => {
    if(isArray(blogs) && blogs.length > 0) {
        return 
    }
}