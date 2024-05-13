import React from "react";
import styled from "styled-components";

const FooterStyled = styled.footer`
    display: flex;
    justify-content: flex-end;

    padding-top: 1em;

    border-top: 1px solid;
    border-color: ${(props) => props.theme.colors.olive6};

    > * + * {
        margin-left: 1em;
    }

    strong {
        font-weight: 500;
    }
`;

type FooterProps = {
    todoItems?: number;
    doneItems?: number;
};

export const Footer = ({ todoItems, doneItems }: FooterProps) => (
    <FooterStyled>
        <p><strong>Todo:</strong> {todoItems ?? 0}</p>
        <p><strong>Done:</strong> {doneItems ?? 0}</p>
    </FooterStyled>
);
