import { createSlice } from "@reduxjs/toolkit";
import {
	createTodo,
	deleteTodo,
	getTodosList,
	updateTodo,
} from "../../services/todoServices";

const initialState = {
	todos: [],
	showForm: false,
};

export const fetchTodos = () => (dispatch) => {
	getTodosList.then((todos) => dispatch(setTodos(todos)));
};

export const updateTodoThunk = (todo) => {
	return function (dispatch, getState) {
		const state = getState();
		const todos = state.todos.todos.find((t) => t.id === todo.id);
		const newTodo = { ...todos, completed: !todos.completed };
		updateTodo(newTodo).then(() => {
			const newTodos = state.todos.todos.map((item) =>
				item.id === todo.id ? newTodo : item
			);
			dispatch(setTodos(newTodos));
		});
	};
};

export const createTodoThunk = (todo) => async (dispatch, getState) => {
	const data = await createTodo(todo);
	const state = getState();
	const newTodos = [...state.todos.todos, todo];

	dispatch(setTodos(newTodos));
	return data;
};

export const deleteTodoThunk = (id) => {
	return async function (dispatch, getState) {
		const data = await deleteTodo(id);
		const state = getState();
		const newTodos = state.todos.todos.filter((todo) => todo.id !== id);

		dispatch(setTodos(newTodos));
		return data;
	};
};

export const todosSlice = createSlice({
	name: "todos",
	initialState,
	reducers: {
		setTodos: (state, { payload }) => {
			state.todos = payload;
		},
	},
});

export const { setTodos } = todosSlice.actions;

export default todosSlice.reducer;
