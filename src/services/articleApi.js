import axios from "axios";

export const fetchArticlesWithQuerry = (searchQuery) => {
  return axios
    .get(`https://hn.algolia.com/api/v1/search?query=${searchQuery}`)
    .then((res) => res.data.hits);
};
