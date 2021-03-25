export function getPeople(category = null) {
  const url = category
    ? `https://swapi.dev/api/${category}`
    : "https://swapi.dev/api/people";
  return fetch(url).then((res) => res.json());
}

export function getPeopleWithId(id, category) {
  const url = `https://swapi.dev/api/${category}/${id}`;
  return fetch(url).then((res) => res.json());
}
