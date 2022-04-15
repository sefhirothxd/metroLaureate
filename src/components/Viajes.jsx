import React from 'react';
import Header from './Header';
const Viajes = () => {
	const registro = [
		{
			id: 1,
			estaSalida: 'Estación Bayóvar',
			estaLlegada: 'Estación Gamarra',
			fecha: '13/04/2022',
			horaSali: '17:10 pm',
			horaLlega: '18:10 pm',
		},
		{
			id: 2,
			estaSalida: 'Estación Gamarra',
			estaLlegada: 'Jorge Chavez',
			fecha: '13/04/2022',
			horaSali: '20:00 pm',
			horaLlega: '20:30 pm',
		},
		{
			id: 3,
			estaSalida: 'Jorge Chavez',
			estaLlegada: 'Estación Gamarra',
			fecha: '15/04/2022',
			horaSali: '1:10 pm',
			horaLlega: '2:30 pm',
		},
		{
			id: 4,
			estaSalida: 'Estación Bayóvar',
			estaLlegada: 'villa el salavador',
			fecha: '15/04/2022',
			horaSali: '18:34',
			horaLlega: '18:10',
		},
		{
			id: 5,
			estaSalida: 'villa el salavador',
			estaLlegada: 'Estación Bayóvar',
			fecha: '15/04/2022',
			horaSali: '21:10',
			horaLlega: '10:50',
		},
	];

	return (
		<div className="w-full">
			<Header />
			<h1 className="my-4  text-xl text-verde-metro ml-2 font-bold">
				Registro de viajes
			</h1>
			<div>
				{registro.map((e) => {
					return (
						<div className=" border-2 rounded-md border-verde-metro py-2 mx-2 px-2 mb-2">
							<h2>
								Estacion: {e.estaSalida} &gt; {e.estaLlegada}
							</h2>
							<div>
								<p>fecha:{e.fecha} </p>
								<p>Hora Salida: {e.horaSali}</p>
								<p>Hora llegada: {e.horaLlega}</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Viajes;
