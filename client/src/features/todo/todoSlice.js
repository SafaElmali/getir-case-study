import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTodos = createAsyncThunk("api/todos/", async () => {
  const response = await axios.get("http://localhost:3001/api/todos");
  return response.data;
});

export const addTodo = createAsyncThunk("api/todos/", async (todo) => {
  const response = await axios.post("http://localhost:3001/api/todos", {
    content: todo.content,
    isChecked: todo.isChecked,
  });
  return response.data;
});

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todoList: [],
  },

  reducers: {
    addItem: (state, action) => {
      // postTodo(action.payload);
    },
  },
  extraReducers: {
    [fetchTodos.fulfilled]: (state, action) => {
      state.todoList = action.payload;
    },
    [addTodo.fulfilled]: (state, action) => {
      state.todoList.push(action.payload);
    },
  },
});

export const { addItem } = todoSlice.actions;

export const selectTodoList = (state) => {
  return state.todo.todoList;
};

export default todoSlice.reducer;
