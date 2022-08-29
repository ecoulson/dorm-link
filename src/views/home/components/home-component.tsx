import React from 'react';
import { Optional } from '../../../common/optional';
import { ButtonComponent } from '../../base/components/button-component';
import { TextComponent } from '../../base/components/text-component';
import { CitySearchBoxComponent } from '../../listing/search-listing/components/city-search-box-component';
import { HomeComponentProps } from './home-component-props';

export function HomeComponent({ model }: HomeComponentProps) {
    const renderer = model.render();
    return (
        <>
            <header>
                <h1>{renderer.header.title}</h1>
            </header>
            <main>
                <div>
                    <h2>{renderer.main.aboutSection.text}</h2>
                </div>
                <div>
                    <h3>{renderer.main.browseListingsSection.description}</h3>
                    <CitySearchBoxComponent
                        renderer={renderer.main.browseListingsSection.searchbox}
                        handleSearch={(city) => model.search(city)}
                    />
                </div>
                <div>
                    <h3>{renderer.main.createListingSection.description}</h3>
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
