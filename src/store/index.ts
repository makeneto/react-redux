import { configureStore, createSlice } from "@reduxjs/toolkit"
import { useSelector } from "react-redux"
import type { TypedUseSelectorHook } from "react-redux"

const todoSlice = createSlice({
    name: "todo",
    initialState: ["comer bem", "treinar"] as string[],

    reducers: {
        add(state, action) {
            state.push(action.payload.newTodo)
        },
    },
})

export const store = configureStore({
    reducer: {
        todo: todoSlice.reducer,
    },
})

export const { add } = todoSlice.actions

export type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
