import { Meta, StoryObj } from "@storybook/react";

import { Button, ButtonType, ButtonVariant } from '../Button';

const meta = {
    title: "Button",
    component: Button,
    argTypes: {
        onClick: { action: "clicked" },
    },
} as Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Add: Story = {
    args: {
        variant: ButtonVariant.Add,
        label: 'Add',
    },
};

export const Delete: Story = {
    args: {
        variant: ButtonVariant.Delete,
        label: 'Delete',
    },
};

export const Edit: Story = {
    args: {
        variant: ButtonVariant.Edit,
        label: 'Edit',
    },
};

export const Confirm: Story = {
    args: {
        variant: ButtonVariant.Confirm,
        label: 'Confirm',
    },
};

export const Cancel: Story = {
    args: {
        variant: ButtonVariant.Cancel,
        label: 'Cancel',
    },
};

export const Disabled: Story = {
    args: {
        variant: ButtonVariant.Confirm,
        label: 'Confirm',
        isDisabled: true,
    },
};
