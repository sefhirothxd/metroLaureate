import React from 'react';
import Header from './Header';

const Recarga = () => {
	const fonText = 'my-4 text-verde-metro ml-2 font-bold';
	return (
		<div>
			<Header />
			<h1 className={fonText + ' text-xl'}>Recarga</h1>
			<div className=" py-2 mx-2 px-2 mb-2">
				<h1 className={fonText + ' text-xl'}>Hola, Pedro castillo</h1>
				<div className="relative">
					<span className="absolute right-0 -top-7 text-md text-verde-metro font-bold">
						Credito: S/.70
					</span>
					<div className="border-2 rounded-md h-3 border-verde-metro overflow-hidden">
						<div className="bg-verde-metro h-3 w-1/3"></div>
					</div>
					<p className={fonText + ' text-md'}>Saldo: S/.30</p>
				</div>
			</div>
			<div className="mt-16">
				<h2 className={fonText + ' text-xl'}>Historial de Recargas</h2>
				<hr className="text-verde-metro" />
				<div className="flex flex-col px-2 justify-start m-2">
					<h3>Prestamo</h3>
					<div className="w-full  flex justify-between items-center">
						<p>Tarjeta: 1235679</p>
						<p>Monto: S/.30</p>
					</div>
				</div>
				<div className="flex flex-col px-2 justify-start m-2">
					<h3>Recarga</h3>
					<div className="w-full  flex justify-between items-center">
						<p>Tarjeta: 1235679</p>
						<p>Monto: S/.5</p>
					</div>
				</div>
				<div className="flex flex-col px-2 justify-start m-2">
					<h3>Recarga</h3>
					<div className="w-full  flex justify-between items-center">
						<p>Tarjeta: 1235679</p>
						<p>Monto: S/.10</p>
					</div>
				</div>
				<div className="flex flex-col px-2 justify-start m-2">
					<h3>Recarga</h3>
					<div className="w-full  flex justify-between items-center">
						<p>Tarjeta: 1235679</p>
						<p>Monto: S/.5</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Recarga;
