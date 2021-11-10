import axios from 'axios'

const KEY = "556f14b728be48318f67557804f209a7";
// `https://pixabay.com/api/?q=${q}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
export  const getApiData = (q, page) => {
  return axios(
    
    `https://newsapi.org/v2/everything?q=${q}&apiKey=${KEY}&page=${page}`
  )
    // .then((response) => response())
    .then((response) => {
      return response.data.articles
    });
    
};
