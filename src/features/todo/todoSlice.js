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
        todoList: [
          ...state.todoList,
          { id: state.todoList.length, ...action.payload },
        ],
      };
    },
  },
});

export const { addItem } = todoSlice.actions;

export const selectTodoList = (state) => {
  return state.todo.todoList;
};

export default todoSlice.reducer;
