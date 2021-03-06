import React, { useState } from 'react';
// import logo from '../assets/img/LineaMetro.svg';
import laureate from '../assets/img/logo-laureate.png';
import { useNavigate } from 'react-router-dom';
import Mensaje from './Mensaje';
const Login = () => {
	const [error, setError] = useState(false);
	const [errorText, setErrorText] = useState('');
	const [tipo, setTipo] = useState('');
	const [correo, setCorreo] = useState('');
	const [pass, setPass] = useState('');
	let navigate = useNavigate();
	const border = `border-2 border-black border-opacity-50 rounded-sm mb-1 pl-2`;

	const logeo = () => {
		// if (correo === '' || pass === '') {
		// 	setTipo('error');
		// 	setErrorText('Ingrese su correo y constraseña.');
		// 	setError(true);
		// 	setTimeout(() => {
		// 		setError(false);
		// 	}, 1000);
		// 	return;
		// }
		if (correo === 'n00221919@upn.pe' && pass === '123456') {
			navigate('/inicio');
		} else {
			setTipo('error');
			setErrorText('La contraseña o el correo son incorrectos');
			setError(true);
			setTimeout(() => {
				setError(false);
			}, 2000);
		}
	};

	return (
		<div className=" bg-verde-metro h-probando w-full flex justify-center flex-col items-cente relative">
			{error ? (
				<Mensaje setError={setError} Text={errorText} Tipo={tipo} />
			) : null}
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
						value={correo}
						onChange={(e) => setCorreo(e.target.value)}
						type="email"
						className={border}
						placeholder="Correo"
						data-testid="input-correo"
					/>
					<input
						value={pass}
						onChange={(e) => setPass(e.target.value)}
						type="password"
						className={border}
						placeholder="Contraseña"
						data-testid="input-pass"
					/>
					<div className="flex justify-center">
						<button
							onClick={logeo}
							className=" bg-verde-metro text-lg border-white border-2 py-2 px-3 hover:bg-green-700 text-white  font-semibold rounded-md shadow focus:outline-none"
						>
							Iniciar session
						</button>
						{/* <Link
							className=" bg-verde-metro text-lg border-white border-2 py-2 px-3 hover:bg-green-700 text-white  font-semibold rounded-md shadow focus:outline-none"
							to="/inicio"
						>
							Iniciar session
						</Link> */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
