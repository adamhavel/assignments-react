import React from "react";

import { Layout } from "./Layout";
import { List } from "./List";
import { ListItem } from "./ListItem";
import { Header } from "./Header";
import { Footer } from "./Footer";
import useTodoList, { PartialTodo } from "./hooks/useTodoList";

export const TodoList: React.FC = () => {
    const { todos, addTodo, toggleTodo, deleteTodo, editTodo } = useTodoList();
    const sortedTodos = todos.sort((a, b) =>
        Number(a.isDone) - Number(b.isDone) || b.createdAt - a.createdAt
    );
    const doneTodosCount = todos.filter(({ isDone }) => isDone).length;

    const onItemAdd = async (label: string) => {
        await addTodo({
            label,
            isDone: false,
            createdAt: Date.now(),
        } as PartialTodo);
    };

    const onItemDoneToggle = (id: number) => async (isDone: boolean) => {
        await toggleTodo(id, isDone);
    };

    const onItemDelete = (id: number) => async () => {
        await deleteTodo(id);
    };

    const onItemLabelEdit = (id: number) => async (label: string) => {
        await editTodo(id, label);
    };

    return (
        <Layout>
            <Header onItemAdd={onItemAdd}>
                <h1>To Do app</h1>
            </Header>
            <List>
                {sortedTodos.map(({ id, label, isDone }) => (
                    <ListItem
                        key={id}
                        label={label}
                        isDone={isDone}
                        onItemDelete={onItemDelete(id)}
                        onItemDoneToggle={onItemDoneToggle(id)}
                        onItemLabelEdit={onItemLabelEdit(id)}
                    />
                ))}
            </List>
            <Footer
                todoItems={todos.length - doneTodosCount}
                doneItems={doneTodosCount}
            />
        </Layout>
    );
};
