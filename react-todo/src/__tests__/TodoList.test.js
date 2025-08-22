import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);
    fireEvent.change(screen.getByTestId("todo-input"), {
      target: { value: "Write Tests" },
    });
    fireEvent.click(screen.getByTestId("add-btn"));
    expect(screen.getByText("Write Tests")).toBeInTheDocument();
  });

  test("toggles a todo", () => {
    render(<TodoList />);
    const todo = screen.getByText("Learn React");
    fireEvent.click(todo);
    expect(todo).toHaveStyle("text-decoration: line-through");
    fireEvent.click(todo);
    expect(todo).toHaveStyle("text-decoration: none");
  });

  test("deletes a todo", () => {
    render(<TodoList />);
    const todo = screen.getByText("Learn React");
    const deleteBtn = screen.getByTestId("delete-btn-1");
    fireEvent.click(deleteBtn);
    expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
  });
});
