import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build Todo App")).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);
    const input = screen.getByTestId("todo-input");
    const addBtn = screen.getByTestId("add-btn");

    fireEvent.change(input, { target: { value: "Write Tests" } });
    fireEvent.click(addBtn);

    expect(screen.getByText("Write Tests")).toBeInTheDocument();
  });

  test("toggles a todo", () => {
    render(<TodoList />);
    const todoItem = screen.getByText("Learn React");

    // Initially not completed
    expect(todoItem).not.toHaveStyle("text-decoration: line-through");

    fireEvent.click(todoItem);

    // After toggle
    expect(todoItem).toHaveStyle("text-decoration: line-through");
  });

  test("deletes a todo", () => {
    render(<TodoList />);
    const deleteBtn = screen.getAllByTestId("delete-btn")[0];

    fireEvent.click(deleteBtn);

    expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
  });
});
