import '@testing-library/jest-dom/extend-expect';
import {render, screen} from '@testing-library/react';
import {render as renderer, unmountComponentAtNode } from 'react-dom';
import React from 'react';
import ReadNow from '../Components/readNow/ReadNow';

describe('Testing ReadNow Component', ()=>{
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
 
    test('should have ReadNow text in dashboard component',()=>{
        render(<ReadNow/>);
        expect(screen.getByText('ReadNow')).toBeInTheDocument();
    });

    test('Should have row div',()=>{
        render(<ReadNow/>);
        expect(screen.getByTestId('innerdiv')).toHaveClass('row');
    });

    test('Should have container div',()=>{
        render(<ReadNow/>);
        expect(screen.getByTestId('outerdiv')).toHaveClass('container');
    });

    test('Dashboard component should have only one h2 tag',()=>{
        renderer(<ReadNow/>,element);
        const count = element.getElementsByTagName('h2').length;
        expect(count).toBe(1);
    });

    test('Dashboard component should have 2 div tags',()=>{
        renderer(<ReadNow/>,element);
        const count = element.getElementsByTagName('div').length;
        expect(count).toBe(3);
    });
});

export default ReadNow