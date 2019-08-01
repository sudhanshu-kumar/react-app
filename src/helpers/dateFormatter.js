export const formatDate = date => {
  const formattedDate = {};
  formattedDate.date = new Date(date).getDate();
  formattedDate.month = new Date(date).toLocaleString("default", {
    month: "short"
  });
  formattedDate.year = new Date(date).getFullYear();
  return formattedDate;
};
