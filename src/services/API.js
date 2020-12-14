export function getPeople(category = null) {
  const proxy = "https://cors-anywhere.herokuapp.com/"
  const url = category ? `https://swapi.dev/api/${category}` : "https://swapi.dev/api/people"
  return fetch(
    proxy + url
  ).then((res) => res.json());
}

export function getPeopleWithId(id,category) {
  const proxy = "https://cors-anywhere.herokuapp.com/"
  const url = `https://swapi.dev/api/${category}/${id}`
  return fetch(
    proxy + url
  ).then((res) => res.json());
}
