import TopNavbar from './index' // 실제 컴포넌트 경로
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof TopNavbar> = {
    title: 'Components/molecules/TopNavbar',
    component: TopNavbar,
    tags: ['autodocs'],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: 'fullscreen',
    },
}
export default meta
type Story = StoryObj<typeof TopNavbar>

export const Items: Story = {
    args: {
        user: {
            name: 'Jane Doe',
        },
    },
}
