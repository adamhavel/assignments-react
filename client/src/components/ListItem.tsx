import React, { useState } from "react";
import styled from "styled-components";

import { Checkbox } from "./Checkbox";
import { Form } from "./form/Form";
import { Button, ButtonVariant } from "./Button";

const StyledDiv = styled.li`
    display: flex;
    align-items: center;

    form {
        flex-grow: 1;
    }

    div {
        display: none;
        margin-left: auto;

        > :not(:last-child) {
            margin-right: .5em;
        }
    }

    &:hover div,
    form + div {
        display: block;
    } 

    span {
        padding: 0 .5em;
    }

    > :not(:last-child) {
        margin-right: .5em;
    }
`;

export type ListItemProp = {
    label: string;
    isDone: boolean;
    onItemLabelEdit: (label: string) => void;
    onItemDoneToggle: (isDone: boolean) => void;
    onItemDelete: () => void;
};

export const ListItem = (props: ListItemProp) => {
    const { label, isDone, onItemLabelEdit, onItemDoneToggle, onItemDelete } = props;
    const [isEditing, setIsEditing] = useState(false);

    return (
        <StyledDiv>
            <Checkbox checked={isDone} onCheckedChange={onItemDoneToggle} />
            {isEditing ? (
                <Form
                    onSubmit={newLabel => {
                        onItemLabelEdit(newLabel);
                        setIsEditing(false);
                    }}
                    initialValue={label}
                    onCancel={() => setIsEditing(false)}
                />
            ) : (
                <span>{label}</span>
            )}
            <div>
                {!isEditing && (
                    <Button onClick={() => setIsEditing(true)} variant={ButtonVariant.Edit} label="Edit" />
                )}
                <Button onClick={() => onItemDelete()} variant={ButtonVariant.Delete} label="Delete" />
            </div>
        </StyledDiv>
    );
};
