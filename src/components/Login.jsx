import React, { useState } from 'react';
// import logo from '../assets/img/LineaMetro.svg';
import laureate from '../assets/img/logo-laureate.png';
import { useNavigate } from 'react-router-dom';
const Login = () => {
	const [correo, setCorreo] = useState('');
	const [pass, setPass] = useState('');
	let navigate = useNavigate();
	const border = `border-2 border-black border-opacity-50 rounded-sm mb-1 pl-2`;

	const logeo = () => {
		if (correo === 'n00221919@upn.pe' && pass === '123456') {
			navigate('/inicio');
		} else {
			alert('La contraeña o el correo no existe');
		}
	};

	return (
		<div className=" bg-verde-metro h-probando w-full flex justify-center flex-col items-center">
			<h1 className="w-full text-white font-bold text-3xl mb-5 text-center">
				Metro Laureate
			</h1>
			<div className="w-full flex justify-center flex-col items-center">
				<picture className="flex flex-col items-center gap-4 mb-6">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/7/75/Lima_Metro_Linea_1.svg"
						className="w-40"
						alt="logo metro"
					/>
					<img src={laureate} className="w-40" alt="logo metro" />
				</picture>
				<div className=" flex justify-center flex-col gap-2">
					<input
						onChange={(e) => setCorreo(e.target.value)}
						type="text"
						className={border}
						placeholder="Correo"
					/>
					<input
						onChange={(e) => setPass(e.target.value)}
						type="password"
						className={border}
						placeholder="Contraseña"
					/>
					<div className="flex justify-center">
						<button
							onClick={logeo}
							className=" bg-verde-metro text-lg border-white border-2 py-2 px-3 hover:bg-green-700 text-white  font-semibold rounded-md shadow focus:outline-none"
						>
							Iniciar session
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
