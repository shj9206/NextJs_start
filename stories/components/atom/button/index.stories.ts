import Button from '@/stories/components/atom/button/index' // 실제 컴포넌트 경로
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
        label: '버튼',
        primary: true,
    },
}
