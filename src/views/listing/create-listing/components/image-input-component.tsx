import React, { useEffect, useState } from 'react';
import { Optional } from '../../../../common/optional';
import { ButtonComponent } from '../../../base/components/button-component';
import { TextInputComponent } from '../../../base/components/text-input-component';
import { ImageInputComponentProps } from './image-input-component-props';

export function ImageInputComponent({
    renderer,
    onChange,
}: ImageInputComponentProps) {
    const [url, setUrl] = useState('');
    const [images, setImages] = useState<string[]>([]);

    useEffect(() => {
        onChange(images);
    }, [images]);

    function addImage() {
        setImages([...images, url]);
        setUrl('');
    }

    return (
        <>
            <TextInputComponent
                value={Optional.of(url)}
                renderer={renderer.url}
                onChange={setUrl}
            />
            <ButtonComponent
                renderer={renderer.addImageButton}
                onClick={Optional.of(addImage)}
            />
            <>
                {images.map((src, i) => (
                    <img key={i} src={src} />
                ))}
            </>
        </>
    );
}
