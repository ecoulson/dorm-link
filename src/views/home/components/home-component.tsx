import React from 'react';
import { Optional } from '../../../common/optional';
import { ButtonComponent } from '../../base/components/button-component';
import { HeadingComponent } from '../../base/components/heading-component';
import { HeadingSize } from '../../base/components/heading-size';
import { TextComponent } from '../../base/components/text-component';
import { CitySearchBoxComponent } from '../../listing/search-listing/components/city-search-box-component';
import { HomeComponentProps } from './home-component-props';

export function HomeComponent({ model }: HomeComponentProps) {
    const renderer = model.render();
    return (
        <>
            <header>
                <HeadingComponent size={HeadingSize.Title}>
                    {renderer.header.title}
                </HeadingComponent>
            </header>
            <main>
                <div>
                    <HeadingComponent size={HeadingSize.Subtitle}>
                        {renderer.main.aboutSection.text}
                    </HeadingComponent>
                </div>
                <div>
                    <TextComponent>
                        {renderer.main.browseListingsSection.description}
                    </TextComponent>
                    <CitySearchBoxComponent
                        renderer={renderer.main.browseListingsSection.searchbox}
                        handleSearch={(city) => model.search(city)}
                    />
                </div>
                <div>
                    <TextComponent>
                        {renderer.main.createListingSection.description}
                    </TextComponent>
                    <ButtonComponent
                        renderer={renderer.main.createListingSection.button}
                        onClick={Optional.empty()}
                    />
                </div>
            </main>
            <footer>
                <TextComponent>
                    {renderer.footer.contactUs.text}{' '}
                    <a href={renderer.footer.contactUs.emailLink}>
                        {renderer.footer.contactUs.email}
                    </a>
                </TextComponent>
            </footer>
        </>
    );
}
