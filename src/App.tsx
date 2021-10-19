import TodoTask from "./components/TodoTask/TodoTask";

import './styles/styles.css'

function App() {

	return (
		<div className="App">

			<header>

				<h2>Lists</h2>

				<input
					type="text" autoComplete="off" 
					placeholder="Escrever task..." 
					name="task"
					className="input"
				/>

				<button type="submit" className="btn-header">Adicionar Task</button>
			</header>
			
			<div className="line"></div>

			<TodoTask />
			
		</div>
	);
}

export default App;
