import { Reducer } from "react";

export type Todo = {
    id: number;
    label: string;
    isDone: boolean;
    createdAt: number;
    finishedAt?: number;
};

export enum TodoListActionTypes {
    Fetch = "FETCH"
}

export type TodoListState = {
    todos: Todo[];
}

type TodoListAction = { type: TodoListActionTypes.Fetch, todos: Todo[] }

const todoListReducer: Reducer<TodoListState, TodoListAction> = (state, action) => {
    switch (action.type) {
        case TodoListActionTypes.Fetch:
            return { ...state, todos: action.todos };
        default:
            return state;
    }
};

export default todoListReducer;