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

// // export default Home
// import React, { useState, useEffect } from "react";
// // TodoList
// const API_URL = 'https://playground.4geeks.com/todo';  // url base de la api
// const Home = () => {
// 	// Estado para el texto que se escribe en el input
// 	const [taskInput, setTaskInput] = useState("");
// 	// Estado para la lista de tareas
// 	const [tasks, setTasks] = useState([]);

// 	// Función para crear el usuario
// 	const createUser = async () => {
// 		try {
// 			const response = await fetch(API_URL + '/users/armin', {
// 				method: "POST",
// 				headers: {
// 					"Content-Type": "application/json"
// 				},
// 				body: JSON.stringify({})
// 			});
// 			if (response.status !== 200) {
// 				console.error("Error creando usuario:", response.status);
// 			} else {
// 				const data = await response.json();
// 				console.log("Usuario creado:", data);
// 			}
// 		} catch (error) {
// 			console.error("Error en createUser:", error);
// 		}
// 	}

// 	// Funcion para crear una tarea
// 	const createTask = async () => {
// 		try {
// 			const response = await fetch(API_URL + '/todos/armin', {
// 				method: "POST",
// 				headers: {
// 					"Content-Type": "application/json"
// 				},
// 				body: JSON.stringify({
// 					label: "lavar",
// 					is_done: true
// 				})
// 			});
// 			if (response.status !== 200) {
// 				console.error("Error creando usuario:", response.status);
// 			} else {
// 				const data = await response.json();
// 				console.log("Tarea cerada:", data);
// 			}
// 		} catch (error) {
// 			console.error("Error al crear la tarea:", error);
// 		}
// 	}


// 	// Función para obtener (GET) del servidor
// 	async function getUsers() {

// 		try {
// 			const response = await fetch(API_URL + '/users/armin');
// 			if (response.status !== 200) {
// 				console.log('Error en obtener las tareas', response.status)
// 				return null
// 			}
// 			const data = await response.json()
// 			setTasks(data.todos)
// 		} catch (error) {
// 			console.error('Error en fetchTask')
// 		}
// 	}



// 	// Función para actualizar (PUT) la lista de tareas en el servidor
// 	async function updateUser(newTasks) {

// 		try {
// 			const response = await fetch(API_URL + '/todos/1', {
// 				method: "PUT",
// 				headers: {
// 					"Content-Type": "application/json"
// 				},
// 				body: JSON.stringify({
// 					label: "Tarea actualizada",
// 					is_done: true
// 				})
// 			});
// 			if (response.status !== 200) {
// 				console.error("Error creando lista de tareas:", response.status);
// 			} else {
// 				const data = await response.json();
// 				console.log("lista creada:", data);

// 			}

// 		} catch (error) {
// 			console.error('Error en updateUser:', error)
// 		}
// 	}

// 	// Función para eliminar una tarea de la lista
// 	// async function deleteTask() {

// 	// 	try {
// 	// 		const response = await fetch(API_URL + '/todos/1', {
// 	// 			method: "DELETE",
// 	// 			headers: {
// 	// 				"accept": "application/json"
// 	// 			},
// 	// 			body: JSON.stringify({})
// 	// 		});
// 	// 		if (response.status !== 200) {
// 	// 			console.error("Error eliminando la lista:", response.status);
// 	// 		} else {
// 	// 			const data = await response.json();
// 	// 			console.log("lista eliminada:", data);

// 	// 		}

// 	// 	} catch (error) {
// 	// 		console.error('Error en deleteTask:', error)
// 	// 	}
// 	// }

// 	useEffect(() => {
// 		async function initialize() {
// 			// await createUser();
// 			await getUsers();
// 		}
// 		initialize();
// 	}, []);

// 	// Función para detectar la tecla Enter y agregar la tarea
// 	const handleKeyDown = (event) => {
// 		if (event.key === "Enter" && taskInput !== "") {
// 			// Se agrega la tarea a la lista y se limpia el input
// 			const newTask = { id: Date.now(), label: taskInput, is_done: false };
// 			const newTasks = tasks.concat(newTask)
// 			// const newTasks = [...tasks, taskInput];
// 			setTasks(newTasks);
// 			setTaskInput("");
// 			updateUser(newTasks)
// 		}
// 	};

// 	// Función para eliminar una tarea de la lista y sincronizar con la api
// 	const handleDelete = (index) => {
// 		// Filtramos la tarea en el índice que se quiere eliminar
// 		const newTasks = tasks.filter((_, i) => i !== index);
// 		setTasks(newTasks);
// 		updateUser(newTasks)
// 	};
// 	// Función para limpiar todas las tareas
// 	const clearAll = () => {
// 		setTasks([]);
// 		// updateTask([])
// 		updateUser([])
// 	}

// 	return (
// 		<div className="card d-flex bg-secondary-subtle container-fluid" style={{ height: "700px", margin: "30px auto 0", width: "80%", maxWidth: "600px" }}>
// 			<div className=" card-form text-center d-flex flex-column mb-3 justify-content-center align-items-center">
// 				<h1 className="text-success title-container">todos</h1>
// 				<div
// 					className="d-flex"
// 					style={{ width: "18rem" }}
// 				>
// 					<input
// 						type="text"
// 						className="form-control mb-3"
// 						onChange={(event) => setTaskInput(event.target.value)}
// 						onKeyDown={handleKeyDown} // Detecta la tecla Enter
// 						value={taskInput}
// 						placeholder="Escribe una tarea y presiona Enter"
// 					/>
// 				</div>
// 				<div className="card-items d-flex flex-column " style={{ width: "18rem" }}>
// 					<ul className="list-group list-group-flush ">
// 						{tasks.length === 0 ? (
// 							<li className="list-group-item ">No hay tareas, añadir tareas</li>
// 						) : (
// 							tasks.map((task, index) => (
// 								<li key={index} className="list-group-item task-item  d-flex">
// 									{task.label}
// 									<span
// 										className="delete-icon fs-4 "
// 										onClick={() => handleDelete(index)}
// 									>
// 										x
// 									</span>
// 								</li>
// 							))
// 						)}
// 					</ul>
// 					<button className="btn btn-danger mt-2" onClick={clearAll}>
// 						Clear All
// 					</button>
// 					<div className="card-footer bg-danger-subtle text-secondary justify-content-start d-flex" >
// 						{tasks.length} {tasks.length === 1 ? "item left" : "items left"}
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default Home;


import React, { useState, useEffect } from "react";
// TodoList

const API_URL = 'https://playground.4geeks.com/todo';  // url base de la API

const Home = () => {
	// Estado para el input y la lista de tareas
	const [taskInput, setTaskInput] = useState("");
	const [tasks, setTasks] = useState([]);

	// Función para crear el usuario (si no existe o se reinició la API)
	const createUser = async () => {
		try {
			const response = await fetch(API_URL + '/users/armin', {
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
	};

	// Función para obtener (GET) la lista de tareas del servidor
	async function getUsers() {
		try {
			const response = await fetch(API_URL + '/users/armin');
			if (response.status !== 200) {
				console.log("Error al obtener las tareas", response.status);
				// Si el usuario no existe, lo creamos y volvemos a intentar
				await createUser();
				return;
			}
			const data = await response.json();
			setTasks(data.todos);
		} catch (error) {
			console.error("Error en getUsers:", error);
		}
	}

	// Función para crear una tarea (método POST)
	const createTask = async (label) => {
		try {
			const response = await fetch(API_URL + '/todos/armin', {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					label: label,
					is_done: false
				})
			});
			if (response.status !== 200) {
				console.error("Error creando tarea:", response.status);
			} else {
				const data = await response.json();
				console.log("Tarea creada:", data);
			}
		} catch (error) {
			console.error("Error en createTask:", error);
		}
	};

	// Función para eliminar una tarea individual (método DELETE)
	const deleteTask = async (todoId) => {
		try {
			const response = await fetch(API_URL + '/todos/' + todoId, {
				method: "DELETE",
				headers: {
					"accept": "application/json"
				}
				// Generalmente no se envía body en DELETE
			});
			if (response.status !== 200) {
				console.error("Error eliminando tarea:", response.status);
			} else {
				const data = await response.json();
				console.log("Tarea eliminada:", data);
			}
		} catch (error) {
			console.error("Error en deleteTask:", error);
		}
	};

	// Función para eliminar todas las tareas (Clear All)
	// Se itera sobre el array de tareas y se llama DELETE para cada una
	const clearAll = async () => {
		for (let i = 0; i < tasks.length; i++) {
			await deleteTask(tasks[i].id);
		}

		setTasks([]);

		await getUsers();
	};

	// useEffect para inicializar: se obtiene la lista; si falla, se crea el usuario
	useEffect(() => {
		async function initialize() {
			await getUsers();
		}
		initialize();
	}, []);

	// Función para detectar la tecla Enter y agregar una tarea usando POST
	const handleKeyDown = async (event) => {
		if (event.key === "Enter" && taskInput !== "") {
			await createTask(taskInput);
			setTaskInput("");
			await getUsers(); // Se refresca la lista de tareas desde la API
		}
	};

	// Función para eliminar una tarea de la lista y sincronizar con la API usando DELETE

	const handleDelete = async (taskId) => {
		await deleteTask(taskId);
		await getUsers();
	};

	return (
		<div className="card d-flex bg-secondary-subtle container-fluid" style={{ height: "700px", margin: "30px auto 0", width: "80%", maxWidth: "600px" }}>
			<div className="card-form text-center d-flex flex-column mb-3 justify-content-center align-items-center">
				<h1 className="text-success title-container">todos</h1>
				<div className="d-flex" style={{ width: "18rem" }}>
					<input
						type="text"
						className="form-control mb-3"
						onChange={(event) => setTaskInput(event.target.value)}
						onKeyDown={handleKeyDown}  // Agrega tarea al presionar Enter
						value={taskInput}
						placeholder="Escribe una tarea y presiona Enter"
					/>
				</div>
				<div className="card-items d-flex flex-column" style={{ width: "18rem" }}>
					<ul className="list-group list-group-flush">
						{tasks.length === 0 ? (
							<li className="list-group-item">No hay tareas, añadir tareas</li>
						) : (
							tasks.map((task, index) => (
								<li key={index} className="list-group-item task-item d-flex">
									{task.label}
									<span
										className="delete-icon fs-4"
										onClick={() => handleDelete(task.id)}
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
					<div className="card-footer bg-danger-subtle text-secondary justify-content-start d-flex">
						{tasks.length} {tasks.length === 1 ? "item left" : "items left"}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;















