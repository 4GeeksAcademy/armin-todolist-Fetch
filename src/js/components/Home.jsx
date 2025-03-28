// import React, { useEffect, useState } from "react";
// import { Card } from "./Card";


//Card
// const Home = () => {
// 	const [products, setProducts] = useState([])
// 	const getProducts = async () => {
// 		const API_URL = 'https://dummyjson.com'

// 		try {
// 			const response = await fetch(API_URL + '/products')
// 			if (response.status !== 200) {
// 				console.log('hay un error')
// 				return null
// 			}
// 			const body = await response.json()
// 			const { products } = body
// 			setProducts(products)
// 		} catch (error) {
// 			console.error('error')
// 		}
// 	}
// 	useEffect(() => {
// 		getProducts()
// 	}, [])

// 	return (

// 		<div className="text-center">
// 			<div className='overflow-hidden p-5'>
// 				<div className='d-flex flex-row justify-content-start flew-now-wrap align-items-stretch gap-3 overflow-scroll'>
// 					{
// 						products.map((product) => {
// 							return (
// 								<Card
// 									title={product.title}
// 									cta={product.availabilityStatus}
// 									description={product.description}
// 									imgSource={product.thumbnail}
// 								/>
// 							)

// 						})
// 					}
// 				</div>

// 			</div>
// 		</div>
// 	)
// }

// export default Home
import React, { useState, useEffect } from "react";
// TodoList
const API_URL = 'https://playground.4geeks.com/todo/todos/alesanchezr';  // url base de la api
const USER_URL = 'https://playground.4geeks.com'
const Home = () => {
	// Estado para el texto que se escribe en el input
	const [taskInput, setTaskInput] = useState("");
	// Estado para la lista de tareas
	const [tasks, setTasks] = useState([]);

	// Función para crear el usuario
	const createUser = async () => {
		try {
			const response = await fetch(USER_URL + '/todo/users', {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({})
			});
			if (response.status !== 200) {
				console.error("Error creando usuario:", response.status);
			} else {
				const data = await response.json();
				console.log("Usuario creado:", data);
			}
		} catch (error) {
			console.error("Error en createUser:", error);
		}
	}
	// Función para obtener (GET) la lista de tareas del servidor
	async function getUsers() {

		try {
			const response = await fetch(API_URL);
			if (response.status !== 200) {
				console.log('Error en obtener las tareas', response.status)
				return null
			}
			const data = await response.json()
			setTasks(data.todos)
		} catch (error) {
			console.error('Error en fetchTask')
		}
	}
	// Función para actualizar (PUT) la lista de tareas en el servidor
	async function updateUser(newTasks) {

		try {
			const response = await fetch(API_URL, {
				method: 'PUT',
				headers: {
					'Content-type': 'application/json'
				},
				body: JSON.stringify({ todos: newTasks })
			});
			if (response.status !== 200) {
				console.log('Error al actualizar las tareas', response.status)
			}
		} catch (error) {
			console.error('Error en updateUser:', error)
		}
	}

	useEffect(() => {
		async function initialize() {
			await createUser();
			await getUsers();
		}
		initialize();
	}, []);

	// Función para detectar la tecla Enter y agregar la tarea
	const handleKeyDown = (event) => {
		if (event.key === "Enter" && taskInput !== "") {
			// Se agrega la tarea a la lista y se limpia el input
			const newTasks = [...tasks, taskInput];
			setTasks(newTasks);
			setTaskInput("");
			updateUser(newTasks)
		}
	};

	// Función para eliminar una tarea de la lista
	const handleDelete = (index) => {
		// Filtramos la tarea en el índice que se quiere eliminar
		const newTasks = tasks.filter((_, i) => i !== index);
		setTasks(newTasks);
		updateUser(newTasks)
	};
	// Función para limpiar todas las tareas
	const clearAll = () => {
		setTasks([]);
		updateUser([])
	}

	return (
		<div className="card d-flex bg-secondary-subtle container-fluid" style={{ height: "700px", margin: "30px auto 0", width: "80%", maxWidth: "600px" }}>
			<div className=" card-form text-center d-flex flex-column mb-3 justify-content-center align-items-center">
				<h1 className="text-success title-container">todos</h1>
				<div
					className="d-flex"
					style={{ width: "18rem" }}
				>
					<input
						type="text"
						className="form-control mb-3"
						onChange={(event) => setTaskInput(event.target.value)}
						onKeyDown={handleKeyDown} // Detecta la tecla Enter
						value={taskInput}
						placeholder="Escribe una tarea y presiona Enter"
					/>
				</div>
				<div className="card-items d-flex flex-column " style={{ width: "18rem" }}>
					<ul className="list-group list-group-flush ">
						{tasks.length === 0 ? (
							<li className="list-group-item ">No hay tareas, añadir tareas</li>
						) : (
							tasks.map((task, index) => (
								<li key={index} className="list-group-item task-item  d-flex">
									{task}
									<span
										className="delete-icon fs-4 "
										onClick={() => handleDelete(index)}
									>
										x
									</span>
								</li>
							))
						)}
					</ul>
					<button className="btn btn-danger mt-2" onClick={clearAll}>
						Clear All
					</button>
					<div className="card-footer bg-danger-subtle text-secondary justify-content-start d-flex" >
						{tasks.length} {tasks.length === 1 ? "item left" : "items left"}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;