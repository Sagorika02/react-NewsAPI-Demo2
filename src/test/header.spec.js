import Header from '../Components/header/Header';
import { render, screen } from '@testing-library/react';
import { render as renderer, unmountComponentAtNode } from 'react-dom';
import '@testing-library/jest-dom';
import React from 'react';
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

    test('Should have Contact Manager text in header', () => {
        render(<Header/>);
        expect(screen.getByText('News Portal')).toBeInTheDocument();
    });

  

    test('Should have 4 links in header component', () => {
        renderer(<Header/>, element);
        const count = element.getElementsByTagName('Button').length;
        expect(count).toBe(1);
    });
    test('Should have 4 links in header component', () => {
        renderer(<Header/>, element);
        const count = element.getElementsByTagName('nav').length;
        expect(count).toBe(1);
    });


    test('Should have navbar-brand class in navbar brand link', () => {
        render(<Header/>);
        expect(screen.getByTestId('brandname')).toHaveClass('navbar-brand');
    });

    test('Hyperlinks should have nav-link class', () => {
        renderer(<Header/>, element);
        const links = element.getElementsByTagName('Link');
        for (let i = 1; i < links.length; i++) {
            expect(links[i]).toHaveClass('nav-link');
        }
    });

});


