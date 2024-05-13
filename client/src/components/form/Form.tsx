import React, { useState } from "react";
import styled from "styled-components";

import { Input } from "./Input";
import { Button, ButtonVariant, ButtonType } from "../Button";

const FormStyled = styled.form`
    display: flex;

    input {
        all: unset;
        width: 100%;
        background: ${(props) => props.theme.colors.blackA1};
        border-radius: .25em;
        padding: 0 .5em;
    }

    button {
        flex-shrink: 0;
    }

    > :not(:last-child) {
        margin-right: .5em;
    }
`;

type FormProps = {
    initialValue: string;
    onSubmit: (value: string) => void;
    onCancel: () => void;
};

export const Form = (props: FormProps) => {
    const { initialValue, onSubmit, onCancel } = props;

    const [inputValue, setInputValue] = useState(initialValue);

    return (
        <FormStyled
            onSubmit={(e) => {
                e.preventDefault();
                onSubmit(inputValue);
            }}
            onReset={() => {
                onCancel();
            }}
        >
            <Input value={inputValue} onValueChange={(value) => setInputValue(value)} />
            <Button type={ButtonType.Submit} variant={ButtonVariant.Confirm} isDisabled={!inputValue.trim().length} label="Confirm" />
            <Button type={ButtonType.Reset} variant={ButtonVariant.Cancel} label="Cancel" />
        </FormStyled>
    );
};
