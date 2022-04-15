import React from 'react';
import Header from './Header';

const Perfil = () => {
	return (
		<div>
			<Header />
			<div>
				<figure className="overflow-hidden rounded-full h-32 mt-10 bg-verde-metro w-32 mx-auto">
					<img
						src="https://pidetudomi.com/images/perfil_anonimo.png"
						alt="foto de perfil"
						className="w-32 object-cover "
					/>
				</figure>
				<div className="px-2 mt-20">
					<h2 className="mb-1 text-xl text-verde-metro  font-bold">
						Mi perfil
					</h2>
					<div>
						<hr />
						<ul className="mb-5">
							<li>Nombre: Pedro castillo</li>
							<li>Correo: n00221919@upn.pe</li>
							<li>Usuario: 0001</li>
						</ul>
						<h2 className="mb-1 text-xl text-verde-metro  font-bold">
							Mi institucion
						</h2>
						<hr />
						<div>
							<ul>
								<li>Institucion: Universidad privada del norte</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Perfil;
