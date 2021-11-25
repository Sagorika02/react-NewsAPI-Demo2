import '@testing-library/jest-dom/extend-expect';
import {render, screen} from '@testing-library/react';
import {render as renderer, unmountComponentAtNode } from 'react-dom';
import React from 'react';
import Footer from '../Components/footer/Footer'

describe('Testing Footer Component', ()=>{
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
 
    test('Should have 1 div in footer component', () => {
        renderer(<Footer />, element);
        const count = element.getElementsByTagName('div').length;
        expect(count).toBe(1);
    });

    test('Should have span tag in footer component',()=>{
        renderer(<Footer/>,element);
        const count = element.getElementsByTagName('span').length;
        expect(count).toBe(1);
    })

    test('Should have h5 tag in footer component',()=>{
        renderer(<Footer/>,element);
        const count = element.getElementsByTagName('h5').length;
        expect(count).toBe(1);
    })

    test('Should have footer class in div tag', () => {
        render(<Footer />);
        expect(screen.getByTestId('footdiv')).toHaveClass('footer');
    });

    test('Footer should have the rights reserved text',()=>{
        render(<Footer/>);
        expect(screen.getByText('All Rights Reserved')).toBeInTheDocument;
    });
});

export default Footer;