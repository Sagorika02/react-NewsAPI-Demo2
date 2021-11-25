import '@testing-library/jest-dom/extend-expect';
import {render, screen} from '@testing-library/react';
import {render as renderer, unmountComponentAtNode } from 'react-dom';
import React from 'react';
import Register from '../Components/register/Register'

describe('Testing Register Component', ()=>{
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
 
    test('Should have 6 div in register component', () => {
        renderer(<Register />, element);
        const count = element.getElementsByTagName('div').length;
        expect(count).toBe(6);
    });

    test('Should have two input tags in register component',()=>{
        renderer(<Register/>,element);
        const count = element.getElementsByTagName('input').length;
        expect(count).toBe(2);
    })

    test('Should have one button in register component',()=>{
        renderer(<Register/>,element);
        const count = element.getElementsByTagName('button').length;
        expect(count).toBe(1);
    })

    test('Should have btn btn-success class in button tag', () => {
        render(<Register />);
        expect(screen.getByTestId('registerbt')).toHaveClass('btn btn-success');
    });

    test('Should have container mt-2 class in div tag', () => {
        render(<Register />);
        expect(screen.getByTestId('outerdiv')).toHaveClass('container mt-2');
    });
});

export default Register;