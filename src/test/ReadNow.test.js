import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render as renderer, unmountComponentAtNode } from 'react-dom';
import ReadNow from '../Components/readNow/ReadNow';

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
    test('Should have row class', () => {
        render(<ReadNow />);
        expect(screen.getByTestId('rowClass')).toHaveClass('row');
    });
    test('Card have div tag', () => {
        renderer(<ReadNow />, element);
        const attr = element.querySelector('div');
        expect(attr).toBeTruthy();
    });
    test('Should container class in component', () => {
        renderer(<ReadNow />, element);
        const count = element.getElementsByTagName('.container');
        expect(count).toBeTruthy();
    });
    test('Should have row in component', () => {
        renderer(<ReadNow />, element);
        const count = element.getElementsByTagName('.row');
        expect(count).toBeTruthy();
    });
    test('Should have descendent child', () => {
        render(<ReadNow />);
        expect(screen.getByTestId('value')).toContainElement(screen.getByTestId('rowClass'));

    });
    test('Should container class in component', () => {
        renderer(<ReadNow />, element);
        const count = element.getElementsByTagName('.readnow');
        expect(count).toBeTruthy();
    });

});
export default ReadNow;
