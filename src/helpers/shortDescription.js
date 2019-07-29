export const descriptionShortener = description => {
  if (description && description !== "") {
    const lastIdxOfSpace = description
      .toString()
      .substring(0, 41)
      .lastIndexOf(" ");
    const shortDescription = description
      .toString()
      .substring(0, lastIdxOfSpace);
    return shortDescription;
  } else {
    return "No Description";
  }
};
