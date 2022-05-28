import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodosList } from "../services/todoServices";
import {
	createTodoThunk,
	deleteTodoThunk,
	setTodos,
	updateTodoThunk,
} from "../store/reducers/todos";

export default function useTodos() {
	const todos = useSelector((state) => state.todos.todos);
	const showForm = useSelector((state) => state.todos.showForm);

	const dispatch = useDispatch();

	useEffect(() => {
		getTodosList().then((data) => dispatch(setTodos(data)));
	}, [dispatch]);

	function changeCompleted(todo) {
		return dispatch(updateTodoThunk(todo));
	}

	function saveTodo(todo) {
		return dispatch(createTodoThunk(todo));
	}

	function removeTodo(id) {
		return dispatch(deleteTodoThunk(id));
	}

	function getTodo(id) {
		let todo;
		if (id) {
			todo = todos.find((todo) => todo.id === id);
		}
		return todo || DEFAULT_TODO;
	}

	return { todos, showForm, changeCompleted, saveTodo, removeTodo, getTodo };
}
const DEFAULT_TODO = {
	title: "",
	status: "",
};
