import { Dialog, DialogContent } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import TodosForm from "../pages/TodosForm";

export default function TodosDialog() {
	const navigate = useNavigate();
	const location = useLocation();

	const handleClose = () => {
		navigate("/");
	};

	return (
		<Dialog
			open={location.pathname === "/create" ? true : false}
			onClose={handleClose}>
			<DialogContent>
				<TodosForm />
			</DialogContent>
		</Dialog>
	);
}
