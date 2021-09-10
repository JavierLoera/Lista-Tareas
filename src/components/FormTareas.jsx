import { TextField, Container, Button } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import Alerta from "./Alerta.jsx";

export default function FormTareas({
	handleChange,
	handleSubmit,
	validateForm,
}) {
	return (
		<Container maxwidth="sm">
			<form onSubmit={handleSubmit} autoComplete="off">
				<TextField
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
					Guardar
				</Button>
			</form>
		</Container>
	);
}
