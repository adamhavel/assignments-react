import React from "react";

import { Layout } from "./Layout";
import { List } from "./List";
import { ListItem } from "./ListItem";
import { Header } from "./Header";
import { Footer } from "./Footer";
import useTodoList, { PartialTodo } from "./hooks/useTodoList";

export const TodoList: React.FC = () => {
    const { todos, addTodo } = useTodoList();
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

    return (
        <Layout>
            <Header onItemAdd={onItemAdd}>
                <h1>To Do app</h1>
            </Header>
            <List>
                {sortedTodos.map(todo => (
                    <ListItem
                        key={todo.id}
                        label={todo.label}
                        isDone={todo.isDone}
                        onItemDelete={() => {}}
                        onItemDoneToggle={() => {}}
                        onItemLabelEdit={() => {}}
                    />
                ))}
            </List>
            <Footer />
        </Layout>
    );
};
