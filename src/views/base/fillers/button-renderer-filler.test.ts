import { Optional } from '../../../common/optional';
import { CommandType } from '../../../core';
import { SubmitFormCommand } from '../../forms/submit-form-command';
import { ButtonRenderer } from '../renderers/button-renderer';
import { ButtonRendererFiller } from './button-renderer-filler';

describe('Button Renderer Filler Test Suite', () => {
    const filler = new ButtonRendererFiller();

    test('Should fill the button renderer', () => {
        const renderer = filler.fill(
            'Button',
            Optional.of(new SubmitFormCommand('form-name'))
        );

        expect(renderer).toEqual<ButtonRenderer>({
            text: 'Button',
            command: new SubmitFormCommand('form-name'),
        });
    });

    test('Should fill the button renderer', () => {
        const renderer = filler.fill('Button');

        expect(renderer).toEqual<ButtonRenderer>({
            text: 'Button',
        });
    });
});
