import {
	Button,
	FormControl,
	InputLabel,
	Input,
	Grid
} from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import './App.css';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';

function App() {
	const [todos, setTodos] = useState([]);
	const [input, setInput] = useState();

	// when the app loads, we need to listen to the database and fetch new todos as they get added/removed
	useEffect(() => {
		// this code here... fires when the app.js loads
		db.collection('todos')
			.orderBy('timestamp', 'asc')
			.onSnapshot(snapshot => {
				setTodos(
					snapshot.docs.map(doc => ({ id: doc.id, todo: doc.data().todo }))
				);
			});
	}, []);

	const addTodo = e => {
		e.preventDefault();
		// this will fire off when we click the button

		db.collection('todos').add({
			todo: input,
			timestamp: firebase.firestore.FieldValue.serverTimestamp()
		});
		setInput(' ');
	};

	return (
		<div className="App">
			<h1>Todo App</h1>
			<form>
				<FormControl>
					<InputLabel>☑️ Add a todo</InputLabel>
					<Input
						type="text"
						value={input}
						onChange={e => setInput(e.target.value)}
					/>
				</FormControl>

				<Button
					disabled={!input}
					type="submit"
					onClick={addTodo}
					variant="contained"
					color="primary"
				>
					Add Todo
				</Button>
			</form>

			<ul>
				{todos.map(todo => (
					<Todo todo={todo} key={todo.id} />
				))}
			</ul>
		</div>
	);
}

export default App;
