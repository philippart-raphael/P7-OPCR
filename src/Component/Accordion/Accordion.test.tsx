import React from 'react';
import { render, screen } from '@testing-library/react';
import Accordion from './Accordion';

test('renders Banner Text', () => {
    render(<Accordion active title="Title Test" txtSizeContent="24px" value="Value for Test" valueIsArray={false}/>);
    const linkElement1 = screen.getByText(/Title Test/i);
    const linkElement2 = screen.getByText(/Value for Test/i);
    expect(linkElement1).toBeInTheDocument();
    expect(linkElement2).toBeInTheDocument();
});
