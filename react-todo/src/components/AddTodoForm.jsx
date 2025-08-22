import React, { useState } from "react";

export default function AddTodoForm({ addTodo }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    addTodo(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        data-testid="todo-input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" data-testid="add-btn">
        Add
      </button>
    </form>
  );
}
