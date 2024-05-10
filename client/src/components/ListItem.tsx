import React, { useState } from "react";
import styled from "styled-components";

import { Checkbox } from "./Checkbox";
import { Form } from "./form/Form";
import { Button, ButtonVariant } from "./Button";

const StyledDiv = styled.div`
    display: flex;
    align-items: center;

    div {
        margin-left: auto;
    }

    &:not(:hover) div {
        display: none;
    }
`;

const Label = styled.label`
    margin-left: 15px;
    margin-right: auto;
`;

export type ListItemProp = {
    label: string;
    isDone: boolean;
    onItemLabelEdit: (label: string) => void;
    onItemDoneToggle: () => void;
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
                <Label>{label}</Label>
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
