import { Layout } from 'antd'
import Header from '@/components/molecules/Header'
import Footer from '@/components/molecules/Footer'

export const BasicLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Layout>
            <Header />
            {children}
            <Footer />
        </Layout>
    )
}
