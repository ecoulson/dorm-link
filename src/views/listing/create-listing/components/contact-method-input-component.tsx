import React, { useEffect, useState } from 'react';
import { Optional } from '../../../../common/optional';
import { ContactMethodType } from '../../../../core';
import { ButtonComponent } from '../../../base/components/button-component';
import { TextInputComponent } from '../../../base/components/text-input-component';
import { v4 as uuid } from 'uuid';
import { ContactMethodInputComponentProps } from './contact-method-input-component-props';
import { ContactMethodTextInputComponentState } from './contact-method-text-input-component-state';
import { TextInputRenderer } from '../../../base/renderers/text-input-renderer';

export function ContactMethodInputComponent({
    renderer,
    onChange,
}: ContactMethodInputComponentProps) {
    const [inputStates, setInputStates] = useState<
        ContactMethodTextInputComponentState[]
    >([]);

    useEffect(() => {
        onChange(
            inputStates.map((state) => {
                return {
                    type: state.type,
                    value: state.value,
                };
            })
        );
    }, [inputStates]);

    function addInput(type: ContactMethodType, renderer: TextInputRenderer) {
        return () => {
            setInputStates([
                ...inputStates,
                {
                    id: uuid(),
                    value: '',
                    renderer,
                    type,
                },
            ]);
        };
    }

    function updateStates(updatedState: ContactMethodTextInputComponentState) {
        return (value: string) => {
            updatedState.value = value;
            setInputStates(
                inputStates.map((currentState) => {
                    if (currentState.id === updatedState.id) {
                        return updatedState;
                    }
                    return currentState;
                })
            );
        };
    }

    return (
        <>
            <div>
                {inputStates.map((state) => (
                    <TextInputComponent
                        key={state.id}
                        value={Optional.of(state.value)}
                        renderer={state.renderer}
                        onChange={updateStates(state)}
                    />
                ))}
            </div>
            <div>
                <ButtonComponent
                    renderer={renderer.addEmailButton}
                    onClick={Optional.of(
                        addInput(ContactMethodType.Email, renderer.email)
                    )}
                />
                <ButtonComponent
                    renderer={renderer.addPhoneNumber}
                    onClick={Optional.of(
                        addInput(ContactMethodType.Phone, renderer.phoneNumber)
                    )}
                />
            </div>
        </>
    );
}
