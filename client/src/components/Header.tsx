import React, { useState } from "react";
import styled from "styled-components";

import { Form } from "./form/Form";
import { Button, ButtonVariant } from "./Button";

const StyledDiv = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
        font-size: 1.5rem;
    }

    button {
        background-color: ${(props) => props.theme.colors.grass9};
        border-color: ${(props) => props.theme.colors.grass9};
        color: #fff;

        &:hover,
        &:focus {
            background-color: ${(props) => props.theme.colors.grass8};
        }
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
                <Button onClick={() => setIsFormVisible(true)} variant={ButtonVariant.Add} label="Add todo" />
            )}
        </StyledDiv>
    );
};
