export const required = val => val && val.length
export const minLength = len => val => val && val.length >= len
export const imageURL = val => val && (/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g).test(val)