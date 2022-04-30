import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { Router } from 'react-router-dom';
import Login from './Login';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';

describe('Boton login', () => {
	// test para verificar si se renderizo el input Correo.
	test('render email input', () => {
		// indica cual es la ruta donde evaluara el test
		const navigator = createMemoryHistory({ initialEntries: ['/'] });
		//renderiza la ruta y la pagina que es  Login
		render(
			<Router location={navigator.location} navigator={navigator}>
				<Login />
			</Router>
		);
		//toma el input que tiene como id input-correo y lo guarda en al variable
		const inputEl = screen.getByTestId('input-correo');
		//verifica si el input existe en el documento o render (pantalla)
		expect(inputEl).toBeInTheDocument();
		//verifica si el input es un tiepo correo.
		expect(inputEl).toHaveAttribute('type', 'email');
	});
	// test para verificar si se renderizo el input password.
	test('render password input', () => {
		// indica cual es la ruta donde evaluara el test
		const navigator = createMemoryHistory({ initialEntries: ['/'] });
		render(
			//renderiza la ruta y la pagina que es  Login
			<Router location={navigator.location} navigator={navigator}>
				<Login />
			</Router>
		);
		//toma el input que tiene como id input-pass y lo guarda en al variable
		const inputEl = screen.getByTestId('input-pass');
		//verifica si el input existe en el documento o render (pantalla)
		expect(inputEl).toBeInTheDocument();
		//verifica si el input es un tiepo password.
		expect(inputEl).toHaveAttribute('type', 'password');
	});
	// test para verificar login enrutamiento.
	test('should pass', () => {
		// indica cual es la ruta donde evaluara el test
		const navigator = createMemoryHistory({ initialEntries: ['/'] });
		render(
			//renderiza la ruta y la pagina que es  Login
			<Router location={navigator.location} navigator={navigator}>
				<Login />
			</Router>
		);
		//toma el input que tiene como id input-correo y lo guarda en al variable
		const inpuCorreo = screen.getByTestId('input-correo');
		//toma el input que tiene como id input-pass y lo guarda en al variable
		const inpuPass = screen.getByTestId('input-pass');
		// ingresa el correo en el inpute seleccionado
		userEvent.type(inpuCorreo, 'n00221919@upn.pe');
		// ingresa password en el inpute selecionado
		userEvent.type(inpuPass, '123456');
		//verifica si los input cuenta con  password y contraseña correspondiente
		expect(screen.getByTestId('input-correo')).toHaveValue('n00221919@upn.pe');
		expect(screen.getByTestId('input-pass')).toHaveValue('123456');
		//verifica si se logeo correctamente al iniciar session para logearse y redireccionar a inicio.
		expect(navigator.location.pathname).toBe('/');
		// le da click al boton iniciar session para logearse.
		fireEvent.click(screen.getByText(/Iniciar session/i));
		// verifica si despues de darle a iniciar session lo redireccion a inicio.
		expect(navigator.location.pathname).toBe('/inicio');
	});
});
