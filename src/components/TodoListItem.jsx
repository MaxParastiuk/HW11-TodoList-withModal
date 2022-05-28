import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

export default function PhoneListItem({ item, changeCompleted, removeTodo }) {
	const { title, completed, id } = item;

	function onItemClick(todo) {
		changeCompleted(todo);
	}

	function onDeleteItem(e) {
		e.stopPropagation();
		removeTodo(id);
	}

	return (
		<li
			className='list__item'
			style={{ backgroundColor: getStyle(completed) }}
			onClick={() => onItemClick(item)}>
			<div className='list__item__col'>{title}</div>
			<div className='col'>
				<Button
					onClick={onDeleteItem}
					color='error'
					variant='contained'
					endIcon={<DeleteIcon />}>
					Delete
				</Button>
			</div>
		</li>
	);
}

function getStyle(completed) {
	return completed ? "#198754" : "#ffc107";
}
