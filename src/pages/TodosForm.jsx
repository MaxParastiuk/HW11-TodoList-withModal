import { useForm } from "react-hook-form";
import useTodos from "../hooks/useTodos";
import { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function TodosForm() {
	const [editUser, setEditUser] = useState();
	const { saveTodo, getTodo } = useTodos();
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ defaultValues: getTodo() });

	async function onFormSubmit(data) {
		const boolValue = JSON.parse(data.status);
		data.status = boolValue;

		saveTodo(data);
		navigate("/");
	}

	function handleChange(e) {
		setEditUser({ ...editUser, [e.target.name]: e.target.value });
	}

	return (
		<Paper
			component='form'
			sx={{ p: "24px", display: "block", alignItems: "flex-end" }}
			onSubmit={handleSubmit(onFormSubmit)}>
			<Stack direction='row' sx={{ alignItems: "center" }}>
				<TextField
					sx={{ m: 1, flex: 1 }}
					type='text'
					label='Title'
					variant='standard'
					{...register("title", {
						required: "The field is required",
						maxLength: 255,
					})}
					error={errors.title && errors.title.message !== ""}
					helperText={errors.title?.message}
					onChange={handleChange}
				/>
				<FormControl variant='standard' sx={{ m: 1, minWidth: 167 }}>
					<InputLabel id='demo-simple-select-standard-label'>Status</InputLabel>
					<Select
						labelId='demo-simple-select-standard-label'
						id='demo-simple-select-standard'
						label='Status'
						{...register("status", { required: true })}
						error={errors.status && errors.status.message !== ""}
						helperText={errors.status?.message}>
						<MenuItem value='true' onChange={handleChange}>
							Done
						</MenuItem>
						<MenuItem value='false' onChange={handleChange}>
							Not done
						</MenuItem>
					</Select>
				</FormControl>
			</Stack>
			<Stack
				direction='row'
				sx={{ alignItems: "center", justifyContent: "center" }}>
				<Button
					sx={{ width: "140px", m: 1 }}
					variant='contained'
					size='large'
					color='success'
					type='submit'>
					Save
				</Button>

				<Button
					sx={{ width: "140px", m: 1 }}
					variant='contained'
					size='large'
					color='error'
					component={RouterLink}
					to={"/"}>
					Cancel
				</Button>
			</Stack>
		</Paper>
	);
}
