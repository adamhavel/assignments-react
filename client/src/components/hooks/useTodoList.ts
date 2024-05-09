import { useReducer, useEffect } from "react";
import axios, { Axios, AxiosResponse } from "axios";

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

    return { ...state, addTodo };
};

export default useTodoList;
