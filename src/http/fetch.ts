const api = {
  get: (search: string) => {
    console.warn(search);
    return fetch('https://cat-fact.herokuapp.com/facts').then(response =>
      response.json(),
    );
  },
};

export default api;
