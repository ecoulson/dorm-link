import { Optional } from '../../../common/optional';
import { InputType } from '../input-type';
import { TextInputRenderer } from '../renderers/text-input-renderer';
import { TextInputRendererFiller } from './text-input-renderer-filler';

describe('Text Input Renderer Filler Test Suite', () => {
    const filler = new TextInputRendererFiller();

    test('Should fill text input render', () => {
        const renderer = filler.fill(
            'name',
            'label',
            Optional.of('placeholder'),
            Optional.of('value')
        );

        expect(renderer).toEqual<TextInputRenderer>({
            name: 'name',
            type: InputType.TEXT,
            label: 'label',
            placeholder: 'placeholder',
            value: 'value',
        });
    });
});
