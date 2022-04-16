import React from 'react';
import Header from './Header';

const Inicio = () => {
	return (
		<div>
			<Header />
			<h1 className="  text-xl text-verde-metro ml-2 font-bold">Inicio</h1>
			<a
				href="https://www.lineauno.pe/estaciones/"
				className="flex justify-center flex-col"
			>
				<img
					src="https://www.lineauno.pe/wp-content/uploads/2020/03/Comunicado-1-300x200.jpg"
					alt=""
				/>
				<p className="text-center text-xl font-bold">Estación</p>
			</a>
			<a
				href="https://www.lineauno.pe/horarios/"
				className="flex justify-center flex-col"
			>
				<img
					src="https://www.lineauno.pe/wp-content/uploads/2020/06/comunicado-del-17-3-300x209.png"
					alt=""
				/>
				<p className="text-center text-xl font-bold">Horarios</p>
			</a>
		</div>
	);
};

export default Inicio;
