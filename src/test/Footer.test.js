import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { render as renderer, unmountComponentAtNode } from 'react-dom';
import React from 'react';
import Footer from '../Components/footer/Footer';
// please add your test cases here
describe('Testing Footer Component', () => {
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
    test('Should have Live Feed © 2021', () => {
        render(<Footer />);
        expect(screen.getByTestId('checkText')).toHaveTextContent('Live Feed © 2021');
    });
    test('Should have Footer class in Footer component', () => {
        render(<Footer />);
        expect(screen.getByTestId('checkClass')).toHaveClass('footer');
    });
    test('Should have div tag in footer component', () => {
        renderer(<Footer />, element);
        const count = element.getElementsByTagName('div').length;
        expect(count).toBe(1);
    });
    test('Should have header tag in footer component', () => {
        renderer(<Footer />, element);
        const count = element.getElementsByTagName('h5').length;
        expect(count).toBe(1);
    });
    test('Should have footerText class in Footer component', () => {
        render(<Footer />);
        expect(screen.getByTestId('checkText')).toHaveClass('footerText');
    });
});

export default Footer;