export const sortByNewAdded = blogs => {
  if (blogs)
    return [...blogs].sort(
      (a, b) =>
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );
};

export const sortByLikes = blogs => {
  if (blogs) return [...blogs].sort((a, b) => b.likes - a.likes);
};
