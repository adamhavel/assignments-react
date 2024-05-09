import { Reducer } from "react";

import { Todo } from "../hooks/useTodoList";

export enum TodoListActionTypes {
    Fetch = "FETCH",
    Add = "ADD",
    Toggle = "TOGGLE",
    Delete = "DELETE",
}

export type TodoListState = {
    todos: Todo[];
}

type TodoListAction = 
    | { type: TodoListActionTypes.Fetch, todos: Todo[] }
    | { type: TodoListActionTypes.Add, todo: Todo }
    | { type: TodoListActionTypes.Toggle, todo: Todo }
    | { type: TodoListActionTypes.Delete, id: number };

const todoListReducer: Reducer<TodoListState, TodoListAction> = (state, action) => {
    switch (action.type) {
        case TodoListActionTypes.Fetch:
            return { ...state, todos: action.todos };
        case TodoListActionTypes.Add:
            return { ...state, todos: [...state.todos, action.todo] };
        case TodoListActionTypes.Toggle:
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.todo.id ? action.todo : todo
                ),
            };
        case TodoListActionTypes.Delete:
            return {
                ...state,
                todos: state.todos.filter(({ id }) => id !== action.id),
            };
        default:
            return state;
    }
};

export default todoListReducer;