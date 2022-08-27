import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { InputType } from '../../../base/input-type';
import { ImageInputComponent } from './image-input-component';

describe('Image Input Component Test Suite', () => {
    test('Should add an image to the listing', () => {
        const handler = jest.fn();
        render(
            <ImageInputComponent
                renderer={{
                    type: InputType.IMAGE_URL,
                    url: {
                        name: 'url',
                        label: 'Image URL',
                        type: InputType.TEXT,
                    },
                    addImageButton: {
                        text: 'Add Image',
                    },
                }}
                onChange={handler}
            />
        );

        const input = screen.getByLabelText('Image URL');
        const addButton = screen.getByText('Add Image');
        fireEvent.change(input, {
            target: {
                value: 'http://fake-domain.com/image.png',
            },
        });
        fireEvent.click(addButton);
        fireEvent.change(input, {
            target: {
                value: 'http://fake-domain-2.com/image.png',
            },
        });
        fireEvent.click(addButton);

        expect(handler).toBeCalledWith([
            'http://fake-domain.com/image.png',
            'http://fake-domain-2.com/image.png',
        ]);
        const images = screen
            .getAllByRole<HTMLImageElement>('img')
            .map((image) => image.src);
        expect(
            images
        ).toEqual([
            'http://fake-domain.com/image.png',
            'http://fake-domain-2.com/image.png',
        ])
    });
});
