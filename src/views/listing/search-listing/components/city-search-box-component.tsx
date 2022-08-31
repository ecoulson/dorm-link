import React, { useState } from 'react';
import { Optional } from '../../../../common/optional';
import { ButtonComponent } from '../../../base/components/button-component';
import { TextInputComponent } from '../../../base/components/text-input-component';
import { CitySearchBoxComponentProps } from './city-search-box-component-props';
import styles from '../../../../styles/listings/search-listing/city-search-box.module.css';

export function CitySearchBoxComponent({
    renderer,
    handleSearch,
}: CitySearchBoxComponentProps) {
    const [city, setCity] = useState(renderer.input.value ?? '');

    return (
        <div className={styles.searchBoxContainer}>
            <TextInputComponent
                value={Optional.of(city)}
                renderer={renderer.input}
                onChange={setCity}
            />
            <div className={styles.buttonContainer}>
                <ButtonComponent
                    renderer={renderer.button}
                    onClick={Optional.of(() => handleSearch(city))}
                />
            </div>
        </div>
    );
}
