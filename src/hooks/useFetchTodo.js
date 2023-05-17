import useFetch from "./useFetch";

const URL = "https://jsonplaceholder.typicode.com/todos/";

const useFetchTodo = (params = { id: 1 }) => {
  const finalURL = URL + params.id;

  const { response } = useFetch(finalURL);

  return {
    todo: response,
  };
};

export default useFetchTodo;
