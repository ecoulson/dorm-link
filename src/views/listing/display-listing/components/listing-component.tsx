import React from 'react';
import { HeadingComponent } from '../../../base/components/heading-component';
import { HeadingSize } from '../../../base/components/heading-size';
import { TextComponent } from '../../../base/components/text-component';
import { ListingComponentProps } from './listing-component-props';
import styles from '../../../../styles/listings/display-listing/display-listing.module.css';

export function ListingComponent(props: ListingComponentProps) {
    const renderer = props.model.render();
    return (
        <div className={styles.container}>
            <HeadingComponent size={HeadingSize.Title}>
                {renderer.listing.city}
            </HeadingComponent>
            <HeadingComponent size={HeadingSize.Subtitle}>
                {renderer.listing.price}
            </HeadingComponent>
            <div className={styles.imageContainer}>
                {renderer.listing.images.map((image) => (
                    <img className={styles.image} key={image} src={image} />
                ))}
            </div>
            <TextComponent>{renderer.contactInformation.name}</TextComponent>
            <TextComponent>{renderer.contactInformation.school}</TextComponent>
            {renderer.contactInformation.contactMethods.map((method) => (
                <div key={method.value}>
                    <span>{method.label}: </span>
                    <span>{method.value}</span>
                </div>
            ))}
        </div>
    );
}
