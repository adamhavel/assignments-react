import { useReducer, useEffect } from "react";
import axios from "axios";

import { useEnv } from "../providers/EnvProvider";
import todoListReducer, { Todo, TodoListState, TodoListActionTypes } from "../reducers/todoListReducer";

const initialState: TodoListState = {
    todos: [] as Todo[],
};
  
const useTodoList = () => {
    const [state, dispatch] = useReducer(todoListReducer, initialState);
    const { apiUrl } = useEnv();
    console.log(apiUrl  )
  
    useEffect(() => {
        const fetchTodos = async () => {
            const { data: todos } = await axios.get(apiUrl);
            
            dispatch({ type: TodoListActionTypes.Fetch, todos });
        };
  
        fetchTodos();
    }, []);

    return { ...state };
};

export default useTodoList;
