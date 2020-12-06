import axios from "axios";

const URL = "https://hn.algolia.com/api/v1/search?query=";

export const fetchArticlesWithQuerry = (searchQuery) => {
  return axios.get(URL + searchQuery).then((res) => res.data.hits);
};
