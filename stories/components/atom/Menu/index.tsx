import { Menu } from 'antd'

type PropsType = {
    items: {
        key: number
        label: string
    }[]
}
export default function Index(props: PropsType) {
    const { items } = props
    return (
        <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            items={items}
            style={{ flex: 1, minWidth: 0 }}
        />
    )
}
