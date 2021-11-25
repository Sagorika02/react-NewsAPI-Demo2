import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { render as renderer, unmountComponentAtNode } from 'react-dom';
import React from 'react';
import Register from '../Components/register/Register';

describe('Testing Card Component', () => {
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

    test('Should have row in component', () => {
        renderer(<Register />, element);
        const count = element.getElementsByTagName('.reg');
        expect(count).toBeTruthy();
    });
    test('Should have card-body class in card component', () => {
        render(<Register />);
        expect(screen.getByTestId('regTest')).toHaveClass('reg');
    });
});   