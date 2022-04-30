import React, { useState } from 'react';
import logo from '../assets/img/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faBars,
	faHouseUser,
	faUser,
	faTrain,
	faBattery,
	faMessage,
	faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
// import bar from '../assets/img/bar.svg';

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const menu = {
		transicion: menuOpen ? 'left-0' : '-left-full',
		margin: 'mb-4',
	};
	return (
		<div className="bg-verde-metro relative ">
			<div
				className={
					'bg-verde-metro h-screen absolute z-10 w-full transition-all delay-100 duration-500 ' +
					menu.transicion
				}
			>
				<div className="h-full  flex flex-col justify-between pt-16 pb-5 pl-4 text-white text-xl">
					<ul>
						<Link to="/inicio" className="">
							<li
								className={menu.margin}
								onClick={(e) => setMenuOpen(!menuOpen)}
							>
								<FontAwesomeIcon
									className="mr-2"
									icon={faHouseUser}
									// size="2x"
									inverse
									onClick={(e) => setMenuOpen(!menuOpen)}
									// className="z-10"
								/>
								Inicio
							</li>
						</Link>
						<Link to="/perfil" className="">
							<li
								className={menu.margin}
								onClick={(e) => setMenuOpen(!menuOpen)}
							>
								<FontAwesomeIcon
									className="mr-2"
									icon={faUser}
									// size="2x"
									inverse
									onClick={(e) => setMenuOpen(!menuOpen)}
									// className="z-10"
								/>
								perfil
							</li>
						</Link>
						<Link to="/viajes" className="">
							<li
								className={menu.margin}
								onClick={(e) => setMenuOpen(!menuOpen)}
							>
								<FontAwesomeIcon
									className="mr-2"
									icon={faTrain}
									// size="2x"
									inverse
									onClick={(e) => setMenuOpen(!menuOpen)}
									// className="z-10"
								/>
								Viajes
							</li>
						</Link>
						<Link to="/recarga" className="">
							<li
								className={menu.margin}
								onClick={(e) => setMenuOpen(!menuOpen)}
							>
								<FontAwesomeIcon
									className="mr-2"
									icon={faBattery}
									// size="2x"
									inverse
									onClick={(e) => setMenuOpen(!menuOpen)}
									// className="z-10"
								/>
								Recarga
							</li>
						</Link>
					</ul>
					<ul>
						<Link to="/ayuda" className="">
							<li
								className={menu.margin}
								onClick={(e) => setMenuOpen(!menuOpen)}
							>
								<FontAwesomeIcon
									className="mr-2"
									icon={faMessage}
									// size="2x"
									inverse
									onClick={(e) => setMenuOpen(!menuOpen)}
									// className="z-10"
								/>
								Ayuda
							</li>
						</Link>
						<Link to="/" className="">
							<li
								className={menu.margin}
								onClick={(e) => setMenuOpen(!menuOpen)}
							>
								<FontAwesomeIcon
									className="mr-2"
									icon={faArrowRightFromBracket}
									// size="2x"
									inverse
									onClick={(e) => setMenuOpen(!menuOpen)}
									// className="z-10"
								/>
								Cerrar Sesion
							</li>
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
