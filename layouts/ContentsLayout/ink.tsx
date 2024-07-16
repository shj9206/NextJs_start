'use client'
import { Layout, theme, Breadcrumb } from 'antd'
const { Content } = Layout
const { Item } = Breadcrumb
export const ContentsLayout = ({ children }: { children: React.ReactNode }) => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken()
    return (
        <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Item>Home</Item>
                <Item>List</Item>
                <Item>App</Item>
            </Breadcrumb>
            <Content
                style={{
                    padding: 24,
                    margin: 0,
                    minHeight: 280,
                    background: colorBgContainer,
                    borderRadius: borderRadiusLG,
                }}
            >
                {children}
            </Content>
        </Layout>
    )
}
