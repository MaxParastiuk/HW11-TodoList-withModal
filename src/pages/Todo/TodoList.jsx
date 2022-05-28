import "./TodoList.css";
import TodoListItem from "../../components/TodoListItem";
import Typography from "@mui/material/Typography";
import useTodos from "../../hooks/useTodos";

export default function TodoList() {
	const { todos, changeCompleted, removeTodo } = useTodos();
	return (
		<>
			<Typography sx={headerStyle} align='center' variant='h1'>
				Todos List
			</Typography>
			<ul className='list'>
				{todos.map((todo) => (
					<TodoListItem
						key={todo.id}
						item={todo}
						changeCompleted={changeCompleted}
						removeTodo={removeTodo}
					/>
				))}
			</ul>
		</>
	);
}

export const headerStyle = {
	color: "#f7d028",
	letterSpacing: ".05em",
	textShadow: "4px 4px 0px #d5d5d5, 7px 7px 0px rgba(0, 0, 0, 0.2)",
};
