import { useEffect, useState } from "react";

function Counter({ initialValue = 0 }) {
  const [count, setCount] = useState(initialValue);

  function increment() {
    setCount((currentCount) => currentCount + 1);
  }

  return (
    <section className="card">
      <h2>1. Counter</h2>
      <p className="big-number">{count}</p>
      <button onClick={increment}>Increment</button>
      <button className="light" onClick={() => setCount(0)}>
        Reset
      </button>
      <p className="hint">Expected: the number increases with every click.</p>
    </section>
  );
}

function Profile({ name }) {
  const [draft, setDraft] = useState(name);

  useEffect(() => {
    setDraft(name);
  }, [name]);

  return (
    <section className="card">
      <h2>2. Props and state</h2>
      <p>
        Parent prop: <strong>{name}</strong>
      </p>
      <label>
        Child draft
        <input value={draft} onChange={(e) => setDraft(e.target.value)} />
      </label>
      <p className="hint">
        Toggle the parent name and inspect this component in DevTools.
      </p>
    </section>
  );
}

function TaskList() {
  const [tasks, setTasks] = useState([
    { id: "task-1", label: "Inspect component props", done: false },
    { id: "task-2", label: "Inspect hook state", done: false },
    { id: "task-3", label: "Use stable list keys", done: false },
  ]);

  const toggle = (id) =>
    setTasks((items) =>
      items.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task,
      ),
    );

  const remove = (id) =>
    setTasks((items) => items.filter((task) => task.id !== id));

  return (
    <section className="card">
      <h2>3. Task list</h2>
      <p className="hint">
        Check a task, then remove the first row and inspect the list.
      </p>
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id}>
            <label className={task.done ? "completed" : ""}>
              <input
                type="checkbox"
                checked={task.done}
                onChange={() => toggle(task.id)}
              />
              {task.label}
            </label>
            <button className="remove" onClick={() => remove(task.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

function SearchPreview({ query }) {
  const [preview, setPreview] = useState("Waiting for search...");

  useEffect(() => {
    setPreview(query ? `Preview for: ${query}` : "Enter a search term.");
  }, [query]);

  return <p className="preview">{preview}</p>;
}

function SearchBox() {
  const [query, setQuery] = useState("React DevTools");

  return (
    <section className="card">
      <h2>4. Effect dependencies</h2>
      <label>
        Search query
        <input value={query} onChange={(e) => setQuery(e.target.value)} />
      </label>
      <SearchPreview query={query} />
      <p className="hint">
        Change the query and see whether the preview follows it.
      </p>
    </section>
  );
}

export default function App() {
  const [name, setName] = useState("Alex");

  return (
    <main className="page">
      <header>
        <p className="eyebrow">HANDS-ON REACT EXERCISE</p>
        <h1>React Debug Practice</h1>
        <p>
          Find the bugs with React Developer Tools, fix them, and verify the
          result.
        </p>
      </header>

      <section className="card parent-bar">
        <div>
          <p className="hint">Parent state</p>
          <p className="big-number">{name}</p>
        </div>
        <button
          onClick={() =>
            setName((current) => (current === "Hosea" ? "Kipngeny" : "Makwar"))
          }
        >
          Toggle parent name
        </button>
      </section>

      <div className="grid">
        <Counter initialValue={2} />
        <Profile name={name} />
        <TaskList />
        <SearchBox />
      </div>

      <footer>
        Open DevTools → Components to inspect props and hooks. Use Profiler to
        investigate rendering.
      </footer>
    </main>
  );
}
