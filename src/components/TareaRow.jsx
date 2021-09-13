import React from "react";
import { TableCell, TableRow, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import { red } from "@material-ui/core/colors";

export default function TareaRow({
	id,
	tarea,
	descripcion,
	eliminarTarea,
	modificarTarea,
}) {
	return (
		<TableRow>
			<TableCell>{tarea}</TableCell>
			<TableCell align="center">{descripcion}</TableCell>
			<TableCell>
				<IconButton onClick={() => eliminarTarea(id)} aria-label="delete">
					<DeleteIcon style={{ color: red[500] }} />
				</IconButton>

				<Link to="/Modificar" style={{ textDecoration: "none" }}>
					<Button
						variant="outlined"
						color="primary"
						onClick={() => modificarTarea(id)}
					>
						Modificar
					</Button>
				</Link>
			</TableCell>
		</TableRow>
	);
}
