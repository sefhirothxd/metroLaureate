import React from 'react';
import Header from './Header';
const Viajes = () => {
	const registro = [
		{
			id: 1,
			estacion: 'Estación Bayóvar',
			fecha: '13/04/2022',
			hora: '17:10 pm',
			precio: 0.75,
		},
		{
			id: 2,
			estacion: 'Estación Gamarra',
			fecha: '13/04/2022',
			hora: '20:30 pm',
			precio: 0.75,
		},
		{
			id: 3,
			estacion: 'Jorge Chavez',
			fecha: '15/04/2022',
			hora: '2:30 pm',
			precio: 0.75,
		},
		{
			id: 4,
			estacion: 'Estación Bayóvar',
			fecha: '15/04/2022',
			hora: '18:10 pm',
			precio: 0.75,
		},
		{
			id: 5,
			estacion: 'villa el salavador',
			fecha: '15/04/2022',
			hora: '10:50 am',
			precio: 0.75,
		},
	];

	return (
		<div className="w-full">
			<Header />
			<h1 className="my-4  text-xl text-verde-metro ml-2 font-bold">
				Registro de pago
			</h1>
			<div>
				{registro.map((e) => {
					return (
						<div
							key={e.id}
							className=" border-2 rounded-md border-verde-metro py-2 mx-2 px-2 mb-2"
						>
							<h2>Estacion: {e.estacion}</h2>
							<div>
								<p>fecha:{e.fecha} </p>
								<p>Hora: {e.hora}</p>
								<p>costo: S/. {e.precio}</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Viajes;
