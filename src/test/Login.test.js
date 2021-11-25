import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render as renderer, unmountComponentAtNode } from 'react-dom';
import Login from '../Components/login/Login';

describe('Testing Login Component', () => {

    let element;
    beforeEach(() => {
        element = document.createElement('div');
        document.body.appendChild(element);
    });

    afterEach(() => {
        unmountComponentAtNode(element);
        element.remove();
        element = null;
    });
    test('Should have container class in div tag', () => {
        render(<Login />);
        expect(screen.getByTestId('containerdiv')).toHaveClass('container');
    });

    test('Should have Login Text in Login Page', () => {
        render(<Login />);
        expect(screen.getByText('Login Here')).toBeInTheDocument();
    });
    test('Should have min 2 input fields in Login component', () => {
        renderer(<Login />, element);
        const count = element.getElementsByTagName('input').length;
        expect(count).toBe(2);
    });
    test('Should have Login Button in Login component', () => {
        renderer(<Login />, element);
        const count = element.getElementsByTagName('button').length;
        expect(count).toBe(1);
    });
    test('Should have btn btn-success class in button tag', () => {
        render(<Login />);
        expect(screen.getByTestId('buttonCheck')).toHaveClass('btn btn-success');
    });

});
export default Login;