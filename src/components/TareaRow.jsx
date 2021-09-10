import React from "react";
import { TableCell, TableRow, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles((theme) => ({
	button: {
		margin: theme.spacing(1),
	},
}));

export default function TareaRow({
	id,
	tarea,
	descripcion,
	eliminarTarea,
	modificarTarea,
}) {
	const classes = useStyles();

	return (
		<TableRow>
			<TableCell>{tarea}</TableCell>
			<TableCell align="center">{descripcion} </TableCell>
			<TableCell align="right">
				<Button
					onClick={() => eliminarTarea(id)}
					variant="contained"
					color="secondary"
					className={classes.button}
					startIcon={<DeleteIcon />}
				>
					Eliminar
				</Button>

				<Link to="/Modificar">
					<Button
						onClick={() => modificarTarea(id)}
						style={{ backgroundColor: "#e65100", color: "white" }}
						variant="contained"
						className={classes.button}
						startIcon={<DeleteIcon />}
					>
						Modificar
					</Button>
				</Link>
			</TableCell>
		</TableRow>
	);
}
