import React from "react";
import { TableCell, TableRow } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import CreateIcon from "@material-ui/icons/Create";
import IconButton from "@material-ui/core/IconButton";
import Box from "@material-ui/core/Box";
import { red, cyan } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
	button: {
		margin: theme.spacing(1),
	},
	root: {
		"& > *": {
			margin: theme.spacing(1),
		},
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
			<TableCell align="center">{descripcion}</TableCell>
			<TableCell>
				<Box className={classes.root}>
					<IconButton onClick={() => eliminarTarea(id)} aria-label="delete">
						<DeleteIcon style={{ color: red[500] }} />
					</IconButton>
					<Link to="/Modificar">
						<IconButton
							onClick={() => modificarTarea(id)}
							aria-label="delete"
							disabled
							color="primary"
						>
							<CreateIcon style={{ color: cyan[700] }} />
						</IconButton>
					</Link>
				</Box>
			</TableCell>
		</TableRow>
	);
}
