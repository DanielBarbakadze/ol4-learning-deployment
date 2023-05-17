import useFetchAllTodo from "../hooks/useFetchAllTodo";
import useFetchTodo from "../hooks/useFetchTodo";

const DynamicTodos = () => {
  const { todo } = useFetchTodo({ id: 5 });
  const { todos } = useFetchAllTodo();

  return (
    <div>
      <h1>DynamicTodos</h1>

      {todos?.map((todo) => (
        <div key={todo.id}>
          <p>
            <b>Title:</b> {todo.title}
          </p>
          <p>
            <b>Completed:</b> {todo.completed ? "Yes" : "No"}
          </p>
          <p>
            <b>Id:</b> {todo.id}
          </p>
          <p>
            <b>UserId:</b> {todo.userId}
          </p>
        </div>
      ))}

      {!todos && <p>Loading...</p>}
    </div>
  );
};

export default DynamicTodos;
