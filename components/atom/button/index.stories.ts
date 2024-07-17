import Button from './index' // 실제 컴포넌트 경로
import { fn } from '@storybook/test'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Button> = {
    title: 'Components/Atom/Button',
    component: Button,
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
    args: {
        label: 'Button',
        primary: true,
    },
}
export const Orange: Story = {
    args: {
        backgroundColor: 'orange',
        label: 'Orange Button',
    },
}
export const Lime: Story = {
    args: {
        backgroundColor: 'lime',
        label: 'Lime Button',
    },
}
export const Large: Story = {
    args: {
        size: 'h-[50px] px-6 py-3.5',
        label: 'Large Button',
    },
}

export const Small: Story = {
    args: {
        size: ' h-[30px] px-2.5 py-1.5',
        label: 'Small Button',
    },
}
