import '@testing-library/jest-dom/extend-expect';
import {render, screen} from '@testing-library/react';
import {render as renderer, unmountComponentAtNode } from 'react-dom';
import React from 'react';
import Login from '../Components/login/Login'

describe('Testing Login Component', ()=>{
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
 
    test('Should have 6 div in login component', () => {
        renderer(<Login />, element);
        const count = element.getElementsByTagName('div').length;
        expect(count).toBe(6);
    });

    test('Should have two input tags in login component',()=>{
        renderer(<Login/>,element);
        const count = element.getElementsByTagName('input').length;
        expect(count).toBe(2);
    })

    test('Should have one button in login component',()=>{
        renderer(<Login/>,element);
        const count = element.getElementsByTagName('button').length;
        expect(count).toBe(1);
    })

    test('Should have btn btn-success class in button tag', () => {
        render(<Login />);
        expect(screen.getByTestId('buttontest')).toHaveClass('btn btn-success');
    });

    test('Should have row class in div tag', () => {
        render(<Login />);
        expect(screen.getByTestId('outerdiv')).toHaveClass('row');
    });
});

export default Login;