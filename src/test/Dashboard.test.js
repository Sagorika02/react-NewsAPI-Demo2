import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { render as renderer, unmountComponentAtNode } from 'react-dom';
import DisplayCard from '../Components/dashboard/Dashboard';

describe('Testing DisplayCard Component', () => {

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

    test('Should have div tag in Dashboard component', () => {
        renderer(<DisplayCard />, element);
        const count = element.getElementsByTagName('div').length;
        expect(count).toBe(2);
    });
    test('Should have Header tag in Dashboard component', () => {
        renderer(<DisplayCard />, element);
        const count = element.getElementsByTagName('h2').length;
        expect(count).toBe(1);
    });
    test('Should have descendent child', () => {
        render(<DisplayCard />);
        expect(screen.getByTestId('ancestor')).toContainElement(screen.getByTestId('descendant'));

    });
    test('Assert whether a string representing a HTML element is contained in another element', () => {
        render(<DisplayCard />);
        expect(screen.getByTestId('ancestor')).toContainHTML('<u data-testid="descendant">Daily Live News Feed</u>');
    });
});
export default DisplayCard;