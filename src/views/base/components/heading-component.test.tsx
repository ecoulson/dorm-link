import { render, screen } from '@testing-library/react';
import React from 'react';
import { HeadingComponent } from './heading-component';
import { HeadingSize } from './heading-size';

describe('Heading Component Test Suite', () => {
    test('Should render the heading component', async () => {
        render(
            <HeadingComponent size={HeadingSize.Title}>Title</HeadingComponent>
        );

        const element = await screen.findByText('Title');
        expect(element.tagName.toLowerCase()).toEqual('h1');
    });

    test('Should render the heading component', async () => {
        render(
            <HeadingComponent size={HeadingSize.Subtitle}>
                Subtitle
            </HeadingComponent>
        );

        const element = await screen.findByText('Subtitle');
        expect(element.tagName.toLowerCase()).toEqual('h2');
    });
});
