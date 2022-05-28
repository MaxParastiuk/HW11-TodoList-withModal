import api from "../api/api";
import { TODOS_URI } from "../constants";

export function getTodosList() {
	return api.get(TODOS_URI).then((resp) => resp.data);
}

export function getTodo(id) {
	return api.get(TODOS_URI + "/" + id).then((resp) => resp.data);
}

export function deleteTodo(id) {
	return api.delete(TODOS_URI + "/" + id).then((resp) => resp.data);
}

export function updateTodo(todo) {
	return api.put(TODOS_URI + "/" + todo.id, todo).then((resp) => resp.data);
}
export function createTodo(todo) {
	return api.post(TODOS_URI, todo).then((resp) => resp.data);
}
