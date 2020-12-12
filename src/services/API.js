export function getPeople() {
  return fetch(
    "https://cors-anywhere.herokuapp.com/https://swapi.dev/api/people"
  ).then((res) => res.json());
}

export function getPeopleWithId(id) {
  return fetch(
    `https://cors-anywhere.herokuapp.com/https://swapi.dev/api/people/${id}`
  ).then((res) => res.json());
}
