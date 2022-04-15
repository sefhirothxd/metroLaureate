import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Inicio from './components/Inicio';
import Viajes from './components/Viajes';
import Recarga from './components/Recarga';
function App() {
	return (
		<div className="App  max-w-sm mx-auto">
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/inicio" element={<Inicio />} />
				<Route path="/Viajes" element={<Viajes />} />
				<Route path="/Recarga" element={<Recarga />} />
			</Routes>
		</div>
	);
}

export default App;
