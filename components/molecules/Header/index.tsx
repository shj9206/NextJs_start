'use client'
import { Layout } from 'antd'
import dynamic from 'next/dynamic'

// 동적 임포트: 서버사이드 렌더링(SSR) 비활성화
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
