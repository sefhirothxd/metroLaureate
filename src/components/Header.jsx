import React, { useState } from 'react';
import logo from '../assets/img/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
// import bar from '../assets/img/bar.svg';

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const menu = {
		transicion: menuOpen ? 'left-0' : '-left-full',
	};
	return (
		<div className="bg-verde-metro">
			<div
				className={
					'bg-verde-metro h-screen absolute z-10 w-full transition-all ' +
					menu.transicion
				}
			>
				<div className="h-full flex flex-col justify-between pt-16 pb-5 pl-4 text-white text-lg">
					<ul>
						<Link to="/inicio" className="">
							<li>Inicio</li>
						</Link>
						<Link to="/perfil" className="">
							<li>perfil</li>
						</Link>
						<Link to="/viajes" className="">
							<li>Viajes</li>
						</Link>
						<Link to="/recarga" className="">
							<li>Recarga</li>
						</Link>
					</ul>
					<ul>
						<Link to="/ayuda" className="">
							<li>Ayuda</li>
						</Link>
						<Link to="/" className="">
							<li>Cerrar Sesion</li>
						</Link>
					</ul>
				</div>
			</div>
			<div className="flex justify-between items-center px-4 py-3 ">
				<FontAwesomeIcon
					icon={faBars}
					size="2x"
					inverse
					onClick={(e) => setMenuOpen(!menuOpen)}
					className="z-10"
				/>
				<img src={logo} className="w-24 z-10" alt="logo metro" />
			</div>
		</div>
	);
};

export default Header;
