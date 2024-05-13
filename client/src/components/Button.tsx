import React from "react";
import styled from "styled-components";
import { Pencil1Icon, TrashIcon, PlusIcon, CheckIcon, Cross1Icon } from "@radix-ui/react-icons";

const StyledButton = styled.button`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 1.75em;
    height: 1.75em;
    padding: 0;
    margin: 0;
    border-radius: 50%;
    border-width: 2px;
    background-color: ${(props) => props.theme.colors.blackA3};
    border-color: ${(props) => props.theme.colors.blackA6};

    &:not(:disabled) {
        cursor: pointer;
    }

    &:hover,
    &:focus {
        background-color: ${(props) => props.theme.colors.blackA5};
    }
`;

export enum ButtonType {
    Button = "button",
    Submit = "submit",
    Reset = "reset",
}

export enum ButtonVariant {
    Add = "add",
    Delete = "delete",
    Edit = "edit",
    Confirm = "confirm",
    Cancel = "cancel",
}

type ButtonProps = {
    variant: ButtonVariant;
    onClick?: () => void;
    type?: ButtonType;
    label?: string;
    isDisabled?: boolean;
};

export const Button: React.FC<ButtonProps> = ({ onClick, variant, type = ButtonType.Button, label, isDisabled }) => (
    <StyledButton onClick={onClick} type={type} aria-label={label} disabled={isDisabled}>
        {(() => {
            switch (variant) {
                case ButtonVariant.Add:
                    return <PlusIcon />;
                case ButtonVariant.Delete:
                    return <TrashIcon />;
                case ButtonVariant.Edit:
                    return <Pencil1Icon />;
                case ButtonVariant.Confirm:
                    return <CheckIcon />;
                case ButtonVariant.Cancel:
                    return <Cross1Icon />;
            }
        })()}
    </StyledButton>
);
