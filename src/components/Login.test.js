import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { Router } from 'react-router-dom';
import Login from './Login';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';

describe('Boton login', () => {
	// test para verificar si se renderizo el input Correo.
	test('render email input', () => {
		const navigator = createMemoryHistory({ initialEntries: ['/'] });
		render(
			<Router location={navigator.location} navigator={navigator}>
				<Login />
			</Router>
		);
		const inputEl = screen.getByTestId('input-correo');
		expect(inputEl).toBeInTheDocument();
		expect(inputEl).toHaveAttribute('type', 'email');
	});
	// test para verificar si se renderizo el input password.
	test('render password input', () => {
		const navigator = createMemoryHistory({ initialEntries: ['/'] });
		render(
			<Router location={navigator.location} navigator={navigator}>
				<Login />
			</Router>
		);
		const inputEl = screen.getByTestId('input-pass');
		expect(inputEl).toBeInTheDocument();
		expect(inputEl).toHaveAttribute('type', 'password');
	});
	// test para verificar login enrutamiento.
	test('should pass', () => {
		const navigator = createMemoryHistory({ initialEntries: ['/'] });
		render(
			<Router location={navigator.location} navigator={navigator}>
				<Login />
			</Router>
		);
		const inpuCorreo = screen.getByTestId('input-correo');
		const inpuPass = screen.getByTestId('input-pass');
		userEvent.type(inpuCorreo, 'n00221919@upn.pe');
		userEvent.type(inpuPass, '123456');
		//verifica si los input cuenta con  password y contraseña correspondiente
		expect(screen.getByTestId('input-correo')).toHaveValue('n00221919@upn.pe');
		expect(screen.getByTestId('input-pass')).toHaveValue('123456');
		//verifica si se logeo correctamente al iniciar session para logearse y redireccionar a inicio.
		expect(navigator.location.pathname).toBe('/');
		fireEvent.click(screen.getByText(/Iniciar session/i));
		expect(navigator.location.pathname).toBe('/inicio');
	});
});
