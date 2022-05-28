import Container from "@mui/material/Container";

import TodosDialog from "../../components/TodosDialog";

import TodoList from "./TodoList";

export default function Todo() {
	return (
		<>
			<TodoList />
			<TodosDialog />
		</>
	);
}
