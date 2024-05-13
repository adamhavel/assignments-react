import styled from "styled-components";

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    margin-bottom: auto;

    > * + * {
        margin-top: 1em;
    }
`;
