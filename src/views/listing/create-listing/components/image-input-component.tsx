import React, { useEffect, useState } from 'react';
import { Optional } from '../../../../common/optional';
import { ButtonComponent } from '../../../base/components/button-component';
import { TextInputComponent } from '../../../base/components/text-input-component';
import { ImageInputComponentProps } from './image-input-component-props';
import styles from '../../../../styles/listings/create-listing/image-input.module.css';

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
            <div className={styles.imageInputContainer}>
                <TextInputComponent
                    value={Optional.of(url)}
                    renderer={renderer.url}
                    onChange={setUrl}
                />
                <div className={styles.imageAddButtonContainer}>
                    <ButtonComponent
                        renderer={renderer.addImageButton}
                        onClick={Optional.of(addImage)}
                    />
                </div>
            </div>
            <div className={styles.imagePreviewContainer}>
                {images.map((src, i) => (
                    <img key={i} className={styles.imagePreview} src={src} />
                ))}
            </div>
        </>
    );
}
