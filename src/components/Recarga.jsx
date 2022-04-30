import React, { useState } from 'react';
import Header from './Header';
import { v4 as uuidv4 } from 'uuid';
import Mensaje from './Mensaje';

const Recarga = () => {
	const [error, setError] = useState(false);
	const [errorText, setErrorText] = useState('');
	const [tipo, setTipo] = useState('');
	const [saldo, setSaldo] = useState(30);
	const [credito, setCredito] = useState(70);
	const [recarga, setRecarga] = useState(0);
	const [history, sethistory] = useState([
		{
			id: 1,
			tipo: 'Recarga',
			tarjeta: '1235679',
			fecha: '01/03/2022',
			monto: 10,
		},
		{
			id: 2,
			tipo: 'Recarga',
			tarjeta: '1235679',
			fecha: '14/03/2022',
			monto: 5,
		},
		{
			id: 3,
			tipo: 'Recarga',
			tarjeta: '1235679',
			fecha: '25/03/2022',
			monto: 10,
		},
		{
			id: 4,
			tipo: 'Recarga',
			tarjeta: '1235679',
			fecha: '05/04/2022',
			monto: 5,
		},
		{
			id: 5,
			tipo: 'Recarga',
			tarjeta: '1235679',
			fecha: '11/04/2022',
			monto: 10,
		},
	]);
	let id = uuidv4();
	const fonText = 'my-4 text-white ml-2 font-bold';
	const prestamoCredito = () => {
		if (recarga <= 0) {
			setTipo('error');
			setErrorText('Digite la cantidad a recargar.');
			setError(true);
			setTimeout(() => {
				setError(false);
			}, 2000);
			return;
		}
		let data = new Date();
		let nuevo = {
			id: id,
			tipo: 'Recarga',
			tarjeta: '1235679',
			monto: Number(recarga),
			fecha: data.toLocaleDateString(),
		};

		const nuevoArry = history;
		nuevoArry.push(nuevo);
		if (recarga <= credito) {
			setSaldo(saldo + Number(recarga));
			setCredito(credito - recarga);
			sethistory(nuevoArry);
			setTipo('ok');
			setErrorText(`Se realizo la recarga de S/.${recarga}.`);
			setError(true);
			setTimeout(() => {
				setError(false);
			}, 2000);
		} else {
			setTipo('error');
			setErrorText('La cantidad es superior al monto maximo.');
			setError(true);
			setTimeout(() => {
				setError(false);
			}, 2000);
		}
		console.log('funciono', recarga);
	};

	return (
		<div>
			{error ? (
				<Mensaje setError={setError} Text={errorText} Tipo={tipo} />
			) : null}
			<Header />
			<h1 className="mt-2 mb-4 ml-2 font-bold text-xl text-verde-metro">
				Recarga
			</h1>
			<div className=" py-2 mx-2 px-2 mb-2 bg-gradient-to-r from-verde-alter to-verde-metro rounded-lg">
				<h1 className={fonText + ' text-xl'}>Hola, Pedro castillo</h1>
				<div className="relative">
					<span className="absolute right-0 -top-7 text-md text-white font-bold">
						Credito: S/.{credito}
					</span>
					<div className="border-2 rounded-md h-3 border-text-gray-300 overflow-hidden">
						<div
							className="bg-white h-3 transition-all delay-200 duration-1000 "
							style={{ width: saldo + '%' }}
						></div>
					</div>
					<p className={fonText + ' text-md'}>Saldo: S/.{saldo}</p>
					<div className="flex justify-between">
						<button
							onClick={prestamoCredito}
							className=" bg-verde-metro text-lg border-white border-2 py-2 px-3 hover:bg-green-700 text-white  font-semibold rounded-md shadow focus:outline-none"
						>
							Recargar
						</button>
						<div>
							<p className={fonText + ' text-md'}>ingrese la cantidad: </p>
						</div>
						<input
							onChange={(e) => setRecarga(e.target.value)}
							className="border-2 border-black border-opacity-50 rounded-sm mb-1 h-12 w-10 pl-2"
							type="number"
							min={0}
							max={credito}
						/>
					</div>
				</div>
			</div>
			<div className="mt-4">
				<h2 className="mt-2 mb-4 ml-2 font-bold text-xl text-verde-metro">
					Historial de Recargas
				</h2>
				<hr className="text-verde-metro" />
				<div>
					{history.map((r) => {
						return (
							<div
								key={r.id}
								className=" border-2 rounded-md border-verde-metro py-2 mx-2 px-2 mb-2"
							>
								<h2>Tipo: {r.tipo}</h2>
								<div>
									<p>tarjeta:{r.tarjeta}</p>
									<p>monto:S/. {r.monto}</p>
									<p>monto: {r.fecha}</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Recarga;
