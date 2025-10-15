import { Provider as ReduxProvider } from "react-redux"

import AddTodo from "./components/AddTodo"
import TodoList from "./components/TodoList"
import { store } from "./store"

export default function App() {
    return (
        <ReduxProvider store={store}>
            <AddTodo />
            <TodoList />
        </ReduxProvider>
    )
}
