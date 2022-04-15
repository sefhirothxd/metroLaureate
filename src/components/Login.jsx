import React from 'react';
// import logo from '../assets/img/LineaMetro.svg';
import laureate from '../assets/img/logo-laureate.png';
import { Link } from 'react-router-dom';
const Login = () => {
	const border = `border-2 border-black border-opacity-50 rounded-sm mb-1`;

	return (
		<div className=" bg-verde-metro min-h-screen w-full flex justify-center flex-col items-center">
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
					<input type="text" className={border} placeholder="@upn.pe" />
					<input type="text" className={border} placeholder="Contraseña" />
					<div className="flex justify-center">
						<Link
							to="/inicio"
							className=" bg-verde-metro text-lg border-white border-2 py-2 px-3 hover:bg-green-700 text-white  font-semibold rounded-md shadow focus:outline-none"
						>
							Iniciar session
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
