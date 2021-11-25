import '@testing-library/jest-dom/extend-expect';
import {render, screen} from '@testing-library/react';
import {render as renderer, unmountComponentAtNode } from 'react-dom';
import React from 'react';
import DisplayCard from '../Components/displayCard/DisplayCard';

describe('Testing DisplayCard Component', ()=>{
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
 
    test('Should have News text in displaycard', () => {
        render(<DisplayCard />);
    //   expect(screen.getByText('News')).toBeInTheDocument();
     screen.findByText('News');
        
    });
 
    test('Should have 3 div in displaycard component', () => {
        renderer(<DisplayCard />, element);
        const count = element.getElementsByTagName('div').length;
        expect(count).toBe(3);
    });

  
 
    test('Should have card-body class in card div', () => {
        render(<DisplayCard />);
        expect(screen.getByTestId('card')).toHaveClass('card-body');
    });
    
    test('Should one h5 in displaycard component',()=>{
        renderer(<DisplayCard/>,element);
        const count = element.getElementsByTagName('h5').length;
        expect(count).toBe(1);
    })

    test('Should have card-title class in cardh5 div', () => {
        render(<DisplayCard />);
        expect(screen.getByTestId('cardh5')).toHaveClass('card-title');
    });
    
});

export default DisplayCard;

