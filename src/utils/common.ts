export const getUrlSearchParams = (param: string) => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const value = urlParams.get(param);

  return value
}

export const scrollToEndElement = (element: HTMLDivElement | null) => {
  if (element)
    element.scrollIntoView({ behavior: "smooth", block: "end" });
};
