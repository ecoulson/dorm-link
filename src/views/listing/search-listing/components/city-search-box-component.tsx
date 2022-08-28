import React, { useState } from 'react';
import { Optional } from '../../../../common/optional';
import { ButtonComponent } from '../../../base/components/button-component';
import { TextInputComponent } from '../../../base/components/text-input-component';
import { CitySearchBoxComponentProps } from './city-search-box-component-props';

export function CitySearchBoxComponent({
    renderer,
    handleSearch,
}: CitySearchBoxComponentProps) {
    const [city, setCity] = useState(renderer.input.value as string);

    return (
        <>
            <TextInputComponent
                value={Optional.of(city)}
                renderer={renderer.input}
                onChange={setCity}
            />
            <ButtonComponent
                renderer={renderer.button}
                onClick={Optional.of(() => handleSearch(city))}
            />
        </>
    );
}
