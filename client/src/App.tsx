import { Container } from "./components/Container";
import { TodoList } from "./components/TodoList";
import { ThemeProvider } from "./components/providers/ThemeProvider";
import { EnvProvider } from "./components/providers/EnvProvider";

export const App = () => (
    <ThemeProvider>
        <EnvProvider>
            <Container>
                <TodoList />
            </Container>
        </EnvProvider>
    </ThemeProvider>
);
