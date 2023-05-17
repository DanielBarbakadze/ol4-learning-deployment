import useFetch from "./useFetch";

const URL = "https://jsonplaceholder.typicode.com/todos/";

const useFetchAllTodo = () => {
  const { response } = useFetch(URL);

  return {
    todos: response,
  };
};

export default useFetchAllTodo;
