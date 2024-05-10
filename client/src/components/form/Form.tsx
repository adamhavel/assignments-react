import React, { useState } from "react";
import styled from "styled-components";

import { Input } from "./Input";
import { Button, ButtonVariant, ButtonType } from "../Button";

const FormStyled = styled.form`
    display: flex;
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
