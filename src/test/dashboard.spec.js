import { render, screen } from '@testing-library/react';
import Dashboard from '../Components/dashboard/Dashboard';
import '@testing-library/jest-dom/extend-expect';
import {render as renderer,unmountComponentAtNode} from 'react-dom';
import React from 'react';


describe('Testing Dashboard Component',()=>{
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

    test('should have Trending News text in dashboard component',()=>{
        render(<Dashboard/>);
        expect(screen.getByText('Trending News')).toBeInTheDocument();
    });

    test('Should have row div',()=>{
        render(<Dashboard/>);
        expect(screen.getByTestId('innerdiv')).toHaveClass('row');
    });

    test('Should have container div',()=>{
        render(<Dashboard/>);
        expect(screen.getByTestId('outerdiv')).toHaveClass('container');
    });

    test('Dashboard component should have only one h2 tag',()=>{
        renderer(<Dashboard/>,element);
        const count = element.getElementsByTagName('h2').length;
        expect(count).toBe(1);
    });

    test('Dashboard component should have 2 div tags',()=>{
        renderer(<Dashboard/>,element);
        const count = element.getElementsByTagName('div').length;
        expect(count).toBe(3);
    });
    
})


export default Dashboard;
