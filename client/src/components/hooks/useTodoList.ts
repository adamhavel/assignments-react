import { useReducer, useEffect } from "react";
import axios, { AxiosResponse } from "axios";

import { useEnv } from "../providers/EnvProvider";
import todoListReducer, { TodoListState, TodoListActionTypes } from "../reducers/todoListReducer";

const initialState: TodoListState = {
    todos: [] as Todo[],
};

export type Todo = {
    id: number;
    label: string;
    isDone: boolean;
    createdAt: number;
    finishedAt?: number;
};

export type PartialTodo = Omit<Todo, 'id'>;

export type UseTodoListReturn = TodoListState & {
    addTodo: (todo: PartialTodo) => Promise<void>;
    toggleTodo: (id: number, isDone: boolean) => Promise<void>;
    deleteTodo: (id: number) => Promise<void>;
    editTodo: (id: number, label: string) => Promise<void>;
}
  
const useTodoList = (): UseTodoListReturn => {
    const [state, dispatch] = useReducer(todoListReducer, initialState);
    const { apiUrl } = useEnv();
  
    useEffect(() => {
        const fetchTodos = async () => {
            const { data: todos } = await axios.get(apiUrl) as AxiosResponse<Todo[]>;
            
            dispatch({ type: TodoListActionTypes.Fetch, todos });
        };
  
        fetchTodos();
    }, []);

    const addTodo = async (partialTodo: PartialTodo) => {
        const { data: todo } = await axios.post(apiUrl, partialTodo) as AxiosResponse<Todo>;

        dispatch({ type: TodoListActionTypes.Add, todo });
    };

    const toggleTodo = async (id: number, isDone: boolean) => {
        const { data: todo } = await axios.patch(`${apiUrl}/${id}`, { isDone }) as AxiosResponse<Todo>;

        dispatch({ type: TodoListActionTypes.Toggle, todo });
    };

    const deleteTodo = async (id: number) => {
        await axios.delete(`${apiUrl}/${id}`);

        dispatch({ type: TodoListActionTypes.Delete, id });
    };

    const editTodo = async (id: number, label: string) => {
        const { data: todo } = await axios.patch(`${apiUrl}/${id}`, { label }) as AxiosResponse<Todo>;

        dispatch({ type: TodoListActionTypes.Edit, todo });
    }

    return { ...state, addTodo, toggleTodo, deleteTodo, editTodo };
};

export default useTodoList;
