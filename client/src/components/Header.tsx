import { PlusIcon } from "@radix-ui/react-icons";
import React, { useState } from "react";
import styled from "styled-components";

import { Form } from "./form/Form"

const StyledDiv = styled.header`
    display: flex;

    button {
        all: unset;

        width: 25px;
        height: 25px;

        background-color: ${(props) => props.theme.colors.grass9};
        border: 1px solid;
        border-color: ${(props) => props.theme.colors.olive9};
        border-radius: 50%;

        color: #fff;
    }
`;

type HeaderProps = {
    children: React.ReactNode;
    onItemAdd: (label: string) => void;
};

export const Header = ({ onItemAdd, children }: HeaderProps) => {
    const [isFormVisible, setIsFormVisible] = useState(false);

    return (
        <StyledDiv>
            <h1>{children}</h1>
            {isFormVisible ? (
                <Form
                    initialValue=""
                    onSubmit={label => {
                        onItemAdd(label);
                        setIsFormVisible(false);   
                    }}
                    onCancel={() => setIsFormVisible(false)}
                />
            ) : (
                <button onClick={() => setIsFormVisible(true)}>
                    <PlusIcon />
                </button>
            )}
        </StyledDiv>
    );
};
