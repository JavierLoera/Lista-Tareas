import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
	Table,
	TableCell,
	TableHead,
	TableBody,
	TableRow,
	Paper,
	TableContainer,
	Container,
} from "@material-ui/core";
import TareaRow from "./TareaRow";

const useStyles = makeStyles({
	table: {
		minWidth: 450,
	},
});

export default function BasicTable({ tareas, eliminarTarea, modificarTarea }) {
	const classes = useStyles();

	return (
		<Container maxwidth="sm">
			<TableContainer component={Paper}>
				<Table className={classes.table} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>Tarea</TableCell>
							<TableCell align="center">Descripcion</TableCell>
							<TableCell align="right"></TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{tareas.map((e) => (
							<TareaRow
								key={e.id}
								eliminarTarea={eliminarTarea}
								modificarTarea={modificarTarea}
								id={e.id}
								tarea={e.tarea}
								descripcion={e.descripcion}
							></TareaRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Container>
	);
}
