import { render, screen } from '@testing-library/react';
import React from 'react';
import { TextComponent } from './text-component';

describe('Text Component Test Suite', () => {
    test('Should render the text', () => {
        render(<TextComponent>Some Text</TextComponent>);

        expect(screen.queryByText('Some Text')).toBeTruthy();
    });
});
