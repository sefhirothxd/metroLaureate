import React, { useState } from 'react';
import Header from './Header';
import Select from 'react-select';

const Ayuda = () => {
	const [selectedValue, setSelectedValue] = useState(0);
	const [selecReclamo, setselecReclamo] = useState(0);
	const [selecSolicitudes, setselecSolicitudes] = useState(0);
	const options = [
		{ value: 0, label: 'Seleccionar' },
		{ value: 1, label: 'Reclamo' },
		{ value: 2, label: 'Solicitudes' },
	];
	const reclamos = [
		{ value: 1, label: 'No tengo saldo' },
		{ value: 2, label: 'App no reconoce tarjeta' },
		{ value: 3, label: 'error de cobro' },
		{ value: 4, label: 'otros' },
	];
	const solicitudes = [
		{ value: 1, label: 'Aumentar linea de credito' },
		{ value: 2, label: 'Actulizar datos' },
		{ value: 3, label: 'Nueva tarjeta' },
		{ value: 4, label: 'otros' },
	];
	// handle onChange event of the dropdown
	const combo = (e) => {
		console.log(e);
		setSelectedValue(e.value);
		if (e.value === 1) {
			return 'probando';
		} else {
			return 'probando 2';
		}
	};

	const mensajes = (e) => {
		e.preventDefault();
		alert('Mensaje enviado');
		setSelectedValue(0);
		setselecReclamo(0);
		setselecSolicitudes(0);
	};
	return (
		<div>
			<Header />
			<h1 className="my-4 text-verde-metro  font-bold text-2xl text-center">
				Ayuda
			</h1>
			<form action="" className="px-2 mt-5">
				<Select
					className="mb-2"
					placeholder="Select Option"
					value={options.find((obj) => obj.value === selectedValue)} // set selected value
					options={options} // set list of the data
					onChange={(e) => combo(e)} // assign onChange function
				/>

				{selectedValue === 1 ? (
					<div>
						<Select
							placeholder="Select Option"
							value={reclamos.find((obj) => obj.value === selecReclamo)} // set selected value
							options={reclamos} // set list of the data
							onChange={(e) => setselecReclamo(e.value)} // assign onChange function
						/>
						<h3 className="my-4 text-verde-metro  font-bold text-xl">
							Detalle del problema
						</h3>
						<textarea
							className="border-2 px-2 py-2 border-verde-metro rounded-md w-full"
							name=""
							id=""
							cols="30"
							rows="10"
						></textarea>
						<div className="flex justify-center">
							<button
								onClick={(e) => mensajes(e)}
								className="bg-verde-metro text-lg border-white border-2 py-2 px-4 hover:bg-green-700 text-white  font-semibold rounded-md shadow focus:outline-none"
							>
								Enviar
							</button>
						</div>
					</div>
				) : null}
				{selectedValue === 2 ? (
					<div>
						<Select
							placeholder="Select Option"
							value={solicitudes.find((obj) => obj.value === selecSolicitudes)} // set selected value
							options={solicitudes} // set list of the data
							onChange={(e) => setselecSolicitudes(e.value)} //
						/>
						<h3 className="my-4 text-verde-metro  font-bold text-xl">
							Detalle de la solicitud
						</h3>
						<textarea
							className="border-2 px-2 py-2  border-verde-metro rounded-md w-full"
							name=""
							id=""
							cols="30"
							rows="10"
						></textarea>
						<div className="flex justify-center">
							<button
								onClick={(e) => mensajes(e)}
								className="bg-verde-metro text-lg border-white border-2 py-2 px-4 hover:bg-green-700 text-white  font-semibold rounded-md shadow focus:outline-none"
							>
								Enviar
							</button>
						</div>
					</div>
				) : null}
			</form>
		</div>
	);
};

export default Ayuda;
