const KEY = "23653781-213be0db305102de1ebeb2694";

export const getApiData = (q, page) => {
  return fetch(
    `https://pixabay.com/api/?q=${q}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  )
    .then((response) => response.json())
    .then((response) => response.hits)
    .then((response) => {
      return response;
    });
};
