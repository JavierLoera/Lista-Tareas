import React, { useState } from "react";
import { TextField, Container, Button } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Link } from "react-router-dom";
import Alerta from "./Alerta.jsx";

export default function Modificar({ tareaACambiar, actualizar }) {
	let idTarea = tareaACambiar.id;

	const [tarea, setTarea] = useState(tareaACambiar);
	const [validateForm, setValidateForm] = useState(true);

	/*actualizar tarea*/
	const handleChange = (e) => {
		const { name, value } = e.target;
		setTarea({ ...tarea, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (tarea.tarea && tarea.descripcion !== "") {
			setValidateForm(true);
			actualizar(idTarea, tarea);
		} else {
			setValidateForm(false);
			/*al dar enviar ala funcion recibida como prop le pasamos como argumento el id y la tarea actualizada */
		}
	};
	return (
		<div
			style={{
				height: "100vh",
				display: "grid",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Container maxwidth="sm">
				<form onSubmit={handleSubmit} autoComplete="off">
					<TextField
						value={tarea.tarea}
						onChange={handleChange}
						name="tarea"
						id="standard-basic"
						label="Tarea"
						style={{ margin: 8 }}
						fullWidth
						margin="normal"
						InputLabelProps={{
							shrink: true,
						}}
					/>
					<TextField
						onChange={handleChange}
						value={tarea.descripcion}
						name="descripcion"
						id="standard-basic"
						label="Descripcion"
						style={{ margin: 8 }}
						fullWidth
						margin="normal"
						InputLabelProps={{
							shrink: true,
						}}
					/>
					{validateForm ? (
						<></>
					) : (
						<Alerta
							color="error"
							mensaje="Rellene todos los campos por favor!"
						></Alerta>
					)}

					<Button
						style={{ backgroundColor: "#039be5", color: "white" }}
						type="submit"
						value="Submit"
						variant="contained"
						size="large"
						startIcon={<SaveIcon />}
					>
						Modificar
					</Button>

					<Link to="/">
						<Button
							style={{ backgroundColor: "#039be5", color: "white" }}
							variant="contained"
							size="large"
							startIcon={<ArrowBackIcon />}
						>
							Volver al Inicio
						</Button>
					</Link>
				</form>
			</Container>
		</div>
	);
}
