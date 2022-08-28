import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { anything, capture, instance, mock, reset, verify } from 'ts-mockito';
import { CommandType, EventEmitter, RedirectCommand } from '../../../core';
import { InputType } from '../../base/input-type';
import { CommandContext } from '../../commands/command-context';
import { CommandDispatcher } from '../../commands/command-dispatcher';
import { HomeViewModel } from '../home-view-model';
import { HomeComponent } from './home-component';

describe('Home Component Test Suite', () => {
    const mockedDispatcher = mock(CommandDispatcher);
    const mockedEventEmitter = mock(EventEmitter);

    beforeEach(() => {
        reset(mockedDispatcher);
        reset(mockedEventEmitter);
    });

    test('Should render the home page component', () => {
        const dispatcher = instance(mockedDispatcher);
        render(
            <CommandContext.Provider
                value={{
                    dispatcher,
                    eventEmitter: instance(mockedEventEmitter),
                }}
            >
                <HomeComponent
                    model={
                        new HomeViewModel(
                            {
                                header: {
                                    title: 'Welcome to DormLink!',
                                },
                                main: {
                                    aboutSection: {
                                        text: 'Find cheap internship housing by taking over leases of local college students.',
                                    },
                                    browseListingsSection: {
                                        description:
                                            'Want to find a place to live for the summer?',
                                        searchbox: {
                                            input: {
                                                name: 'city',
                                                label: 'Where are you going?',
                                                placeholder: 'Los Angeles...',
                                                type: InputType.TEXT,
                                            },
                                            button: {
                                                text: 'Browse Listings',
                                            },
                                        },
                                    },
                                    createListingSection: {
                                        description:
                                            'Want to host a fellow student for the summer?',
                                        button: {
                                            text: 'Post Your Listing',
                                            command: {
                                                type: CommandType.Redirect,
                                                url: '/listing/create',
                                            } as RedirectCommand,
                                        },
                                    },
                                },
                                footer: {
                                    contactUs: {
                                        text: 'Contact us at ',
                                        email: 'dormlinktech@gmail.com',
                                        emailLink:
                                            'mailto:dormlinktech@gmail.com',
                                    },
                                },
                            },
                            dispatcher
                        )
                    }
                />
            </CommandContext.Provider>
        );

        expect(screen.queryByText('Post Your Listing')).toBeTruthy();
        expect(screen.queryByText('Browse Listings')).toBeTruthy();
    });

    test('Should redirect the user to the create page', () => {
        const dispatcher = instance(mockedDispatcher);
        render(
            <CommandContext.Provider
                value={{
                    dispatcher,
                    eventEmitter: instance(mockedEventEmitter),
                }}
            >
                <HomeComponent
                    model={
                        new HomeViewModel(
                            {
                                header: {
                                    title: 'Welcome to DormLink!',
                                },
                                main: {
                                    aboutSection: {
                                        text: 'Find cheap internship housing by taking over leases of local college students.',
                                    },
                                    browseListingsSection: {
                                        description:
                                            'Want to find a place to live for the summer?',
                                        searchbox: {
                                            input: {
                                                name: 'city',
                                                label: 'Where are you going?',
                                                placeholder: 'Los Angeles...',
                                                type: InputType.TEXT,
                                            },
                                            button: {
                                                text: 'Browse Listings',
                                            },
                                        },
                                    },
                                    createListingSection: {
                                        description:
                                            'Want to host a fellow student for the summer?',
                                        button: {
                                            text: 'Post Your Listing',
                                            command: {
                                                type: CommandType.Redirect,
                                                url: '/listing/create',
                                            } as RedirectCommand,
                                        },
                                    },
                                },
                                footer: {
                                    contactUs: {
                                        text: 'Contact us at ',
                                        email: 'dormlinktech@gmail.com',
                                        emailLink:
                                            'mailto:dormlinktech@gmail.com',
                                    },
                                },
                            },
                            dispatcher
                        )
                    }
                />
            </CommandContext.Provider>
        );

        const createButton = screen.getByText('Post Your Listing');
        fireEvent.click(createButton);

        verify(mockedDispatcher.dispatch(anything())).once();
        const [command] = capture(mockedDispatcher.dispatch).last();
        expect(command).toEqual({
            type: CommandType.Redirect,
            url: '/listing/create',
        });
    });

    test('Should redirect the user to the listings with the queried city', () => {
        const dispatcher = instance(mockedDispatcher);
        render(
            <CommandContext.Provider
                value={{
                    dispatcher,
                    eventEmitter: instance(mockedEventEmitter),
                }}
            >
                <HomeComponent
                    model={
                        new HomeViewModel(
                            {
                                header: {
                                    title: 'Welcome to DormLink!',
                                },
                                main: {
                                    aboutSection: {
                                        text: 'Find cheap internship housing by taking over leases of local college students.',
                                    },
                                    browseListingsSection: {
                                        description:
                                            'Want to find a place to live for the summer?',
                                        searchbox: {
                                            input: {
                                                name: 'city',
                                                label: 'Where are you going?',
                                                placeholder: 'Los Angeles...',
                                                type: InputType.TEXT,
                                            },
                                            button: {
                                                text: 'Browse Listings',
                                            },
                                        },
                                    },
                                    createListingSection: {
                                        description:
                                            'Want to host a fellow student for the summer?',
                                        button: {
                                            text: 'Post Your Listing',
                                            command: {
                                                type: CommandType.Redirect,
                                                url: '/listing/create',
                                            } as RedirectCommand,
                                        },
                                    },
                                },
                                footer: {
                                    contactUs: {
                                        text: 'Contact us at ',
                                        email: 'dormlinktech@gmail.com',
                                        emailLink:
                                            'mailto:dormlinktech@gmail.com',
                                    },
                                },
                            },
                            dispatcher
                        )
                    }
                />
            </CommandContext.Provider>
        );

        const searchboxInput = screen.getByLabelText('Where are you going?');
        fireEvent.change(searchboxInput, {
            target: {
                value: 'Seattle',
            },
        });
        const browseButton = screen.getByText('Browse Listings');
        fireEvent.click(browseButton);

        verify(mockedDispatcher.dispatch(anything())).once();
        const [command] = capture(mockedDispatcher.dispatch).last();
        expect(command).toEqual({
            type: CommandType.Redirect,
            url: '/listing/search?city=Seattle',
        });
    });
});
