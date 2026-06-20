import { useEffect, useState } from "react";
import "./App.css";
import API from "./services/api.js"

export default function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("Pending");
  const [search, setSearch] = useState("");

  const fetchTodos = async () => {
    try {
       const res = await API.get("/todos");
       setTodos(res.data);
    } catch (err) {
    console.error(err);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const createTodo = async () => {
       if (!title.trim()) return;
       try {
            await API.post("/create", { title, status,
      });
      setTitle("");
      setStatus("Pending");
      fetchTodos();
      } 
      catch (err) {
           console.error(err);
      }
  };

  const deleteTodo = async (id) => {
  try {
    await API.delete(`/delete?id=${id}`);

    fetchTodos();
  } catch (err) {
    console.error(err);
  }
};

const toggleStatus = async (todo) => {
  try {
    await API.put("/update", {
      id: todo.id,
      title: todo.title,
      status:
        todo.status === "Pending"
          ? "Completed"
          : "Pending",
    });

    fetchTodos();
  } catch (err) {
    console.error(err);
  }
};
  const filtered = todos.filter((t) =>
    t.title.toLowerCase().includes(search.toLowerCase())
  );

  const completed = todos.filter(
    (t) => t.status === "Completed"
  ).length;

  const pending = todos.length - completed;

  return (
    <div className="app">

      <h1 className="title">
        TaskMake
      </h1>

      <p className="subtitle">
        Create your tasks
      </p>

      <div className="stats-container">

          <div className="triangle total-triangle">
               <h2>{todos.length}</h2>
              <span>Total Tasks</span>
              </div>

          <div className="triangle completed-triangle">
              <h2>{completed}</h2>
              <span>Completed</span>
          </div>
          <div className="triangle pending-triangle">
              <h2>{pending}</h2>
              <span>Pending</span>
          </div>
      </div>

      <div className="create-box">

        <input
          placeholder="Enter task..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option>Pending</option>
          <option>Completed</option>
        </select>

        <button onClick={createTodo}>
          Create
        </button>

      </div>

      <input
        className="search"
        placeholder="Search todos..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="todo-grid">

        {filtered.map((todo) => (
          <div className="todo-card" key={todo.id}>

            <h3>{todo.title}</h3>

            <span
              className={
                todo.status === "Completed"
                  ? "completed"
                  : "pending"
              }
            >
              {todo.status}
            </span>

            <div className="actions">

              <button
                onClick={() => toggleStatus(todo)}
              >
                Toggle
              </button>

              <button
                onClick={() => deleteTodo(todo.id)}
              >
                Delete
              </button>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}