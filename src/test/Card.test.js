import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { render as renderer, unmountComponentAtNode } from 'react-dom';
import React from 'react';
import Card from '../Components/card/Card';
// please add your test cases here

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
    test('Should have Read later Button', () => {
        render(<Card />);
        expect(screen.getByTestId('btnSubmit')).toHaveTextContent('Read Later');
    });
    test('Should have card-body class in card component', () => {
        render(<Card />);
        expect(screen.getByTestId('cardClass')).toHaveClass('card-body');
    });
    test('Should have card-title in card component', () => {
        render(<Card />);
        expect(screen.getByTestId('checkTitle')).toHaveClass('card-title');
    });
    test('Should have card-Text in card component', () => {
        render(<Card />);
        expect(screen.getByTestId('checkText')).toHaveClass('card-text');
    });
    test('Should have only 1 links in Card component', () => {
        renderer(<Card />, element);
        const count = element.getElementsByTagName('a').length;
        expect(count).toBe(1);
    });
    test('Should have only 1 Image in Card component', () => {
        renderer(<Card />, element);
        const count = element.getElementsByTagName('img').length;
        expect(count).toBe(1);
    });

});

export default Card;