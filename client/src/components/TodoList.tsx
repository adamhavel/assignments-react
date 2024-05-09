import React from "react";

import { Layout } from "./Layout";
import { List } from "./List";
import { ListItem } from "./ListItem";
import { Header } from "./Header";
import { Footer } from "./Footer";
import useTodoList, { PartialTodo } from "./hooks/useTodoList";

export const TodoList: React.FC = () => {
    const { todos, addTodo, toggleTodo } = useTodoList();
    const sortedTodos = todos.sort((a, b) =>
        Number(a.isDone) - Number(b.isDone) || b.createdAt - a.createdAt
    );

    const onItemAdd = async (label: string) => {
        await addTodo({
            label,
            isDone: false,
            createdAt: Date.now(),
        });
    };

    const onItemDoneToggle = (id: number) => async (isDone: boolean) => {
        await toggleTodo(id, isDone);
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
                        onItemDelete={() => {}}
                        onItemDoneToggle={onItemDoneToggle(id)}
                        onItemLabelEdit={() => {}}
                    />
                ))}
            </List>
            <Footer />
        </Layout>
    );
};
