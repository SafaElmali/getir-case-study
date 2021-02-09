import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todoList: [],
  },
  reducers: {
    addItem: (state, action) => {
      return {
        ...state,
        todoList: [action.payload, ...state.todoList],
      };
    },
  },
});

export const { addItem } = todoSlice.actions;

export const selectTodoList = (state) => {
  return state.todo.todoList;
};

export default todoSlice.reducer;
