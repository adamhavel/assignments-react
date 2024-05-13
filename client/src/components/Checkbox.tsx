import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckboxProps } from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import styled from "styled-components";

const CheckboxStyled = styled(CheckboxPrimitive.Root)`
    all: unset;

    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    width: 1.75em;
    height: 1.75em;

    background-color: white;
    border-radius: 50%;
    box-shadow: ${(props) => `0 1px 5px ${props.theme.colors.blackA7}`};

    &:hover {
        background-color: ${(props) => props.theme.colors.grass3};
    }

    &:focus {
        box-shadow: 0 2px 10px black;
    }
`;

const CheckboxIndicator = styled(CheckboxPrimitive.Indicator)`
    color: ${(props) => props.theme.grass11};
`;

export const Checkbox = (props: CheckboxProps) => (
    <CheckboxStyled {...props}>
        <CheckboxIndicator>
            <CheckIcon />
        </CheckboxIndicator>
    </CheckboxStyled>
);
