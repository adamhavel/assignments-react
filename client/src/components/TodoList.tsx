import React from "react";

import { Layout } from "./Layout";
import { List } from "./List";
import { ListItem } from "./ListItem";
import { Header } from "./Header";
import { Footer } from "./Footer";
import useTodoList from "./hooks/useTodoList";

export const TodoList: React.FC = () => {
    const { todos } = useTodoList();

    return (
        <Layout>
            <Header onItemAdd={() => console.warn("unimplemented")}>
                <h1>To Do app</h1>
            </Header>
            <List>
                {todos.map(todo => (
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
