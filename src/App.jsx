import React, { useState, useEffect } from "react";
import FormTareas from "./components/FormTareas.jsx";
import BasicTable from "./components/BasicTable.jsx";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Modificar from "./components/Modificar.jsx";

import shortid from "shortid";

export default function FormTable() {
	const initialState = {
		id: shortid.generate(),
		tarea: "",
		descripcion: "",
	};

	{
		/* recuperar datos de localStarage */
	}

	const saved = localStorage.getItem("tareas");
	const tareasGuardadas = JSON.parse(saved) || [];

	const [valorInput, setValorInput] = useState(initialState);
	const [tareas, setTareas] = useState(tareasGuardadas);
	const [validateForm, setValidateForm] = useState(true);
	let tareaACambiar = "";
	{
		/*guardar el estado en local Storage */
	}
	useEffect(() => {
		localStorage.setItem("tareas", JSON.stringify(tareas));
	}, [tareas]);

	{
		/*valor del input */
	}
	const handleChange = (e) => {
		const { name, value } = e.target;
		setValorInput({ ...valorInput, [name]: value });
	};

	{
		/*funcion para el envio del formulario cambio del estado de la validacion*/
	}
	const handleSubmit = (e) => {
		e.preventDefault();
		if (valorInput.tarea && valorInput.descripcion !== "") {
			setValidateForm(true);
			setTareas([valorInput, ...tareas]);
			setValorInput(initialState);
			e.target.reset();
		} else {
			setValidateForm(false);
		}
	};

	const eliminarTarea = (id) => {
		let listaFiltrada = tareas.filter((tarea) => tarea.id !== id);
		setTareas(listaFiltrada);
	};
	{
		/*funcion pasada como prop a la tabla y al componente TareaRow para filtrar el elemnto a modificar */
	}
	const modificarTarea = (id) => {
		let tareaAModificar = tareas.filter((tarea) => tarea.id === id);
		tareaACambiar = tareaAModificar[0];
	};

	/*funcion pasada a el formulario de actualizacion para actualziar el estado y la tarea*/
	const actualizar = (id, tareaActualizada) => {
		const listaActualizada = tareas.map((e) => {
			if (e.id === id) {
				e = tareaActualizada;
			}
			return e;
		});
		setTareas([...listaActualizada]);
	};
	return (
		<>
			<BrowserRouter>
				{
					<Switch>
						<Route
							exact
							path="/Modificar"
							component={() => (
								<Modificar
									tareaACambiar={tareaACambiar}
									actualizar={actualizar}
								/>
							)}
						/>
					</Switch>
				}

				<FormTareas
					handleChange={handleChange}
					handleSubmit={handleSubmit}
					validateForm={validateForm}
				></FormTareas>
				<BasicTable
					tareas={tareas}
					eliminarTarea={eliminarTarea}
					modificarTarea={modificarTarea}
				></BasicTable>
			</BrowserRouter>
		</>
	);
}
