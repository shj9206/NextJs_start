import { Layout } from 'antd'
import dynamic from 'next/dynamic'
const Menu = dynamic(() => import('@/stories/components/atom/Menu'), { ssr: false })

export default function Index() {
    const items = new Array(15).fill(null).map((_, index) => ({
        key: index + 1,
        label: `nav ${index + 1}`,
    }))
    return (
        <Layout.Header style={{ display: 'flex', alignItems: 'center' }}>
            <div className="demo-logo" />
            <Menu items={items} />
        </Layout.Header>
    )
}
