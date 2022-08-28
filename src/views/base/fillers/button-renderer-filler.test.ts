import { Optional } from '../../../common/optional';
import { RedirectCommand } from '../../../core';
import { ButtonRenderer } from '../renderers/button-renderer';
import { ButtonRendererFiller } from './button-renderer-filler';

describe('Button Renderer Filler Test Suite', () => {
    const filler = new ButtonRendererFiller();

    test('Should fill the button renderer', () => {
        const renderer = filler.fill(
            'Button',
            Optional.of(new RedirectCommand('/form'))
        );

        expect(renderer).toEqual<ButtonRenderer>({
            text: 'Button',
            command: new RedirectCommand('/form'),
        });
    });

    test('Should fill the button renderer', () => {
        const renderer = filler.fill('Button');

        expect(renderer).toEqual<ButtonRenderer>({
            text: 'Button',
        });
    });
});
