import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { render as renderer, unmountComponentAtNode } from 'react-dom';
import Header from '../Components/header/Header';

describe('Testing Header Component', () => {

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

    test('Should use list in header', () => {
        render(<Header />);
        expect(screen.getByTestId('col')).toHaveClass('collapse');
    });

    test('Should have 4 links in header component', () => {
        renderer(<Header />, element);
        const count = element.getElementsByTagName('Link').length;
        expect(count).toBe(0);
    });

    test('Should have navbar-brand class in navbar brand link', () => {
        render(<Header />);
        expect(screen.getByTestId('brandname')).toHaveClass('navbar-dark');
    });

    test('Hyperlinks should have nav-link class', () => {
        renderer(<Header />, element);
        const links = element.getElementsByTagName('Link');
        for (let i = 1; i < links.length; i++) {
            expect(links[i]).toHaveClass('nav-link');
        }
    });
});
export default Header;