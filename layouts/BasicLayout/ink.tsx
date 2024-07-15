import { Layout } from 'antd'
import Header from '@/stories/components/molecules/Header'
import Footer from '@/stories/components/molecules/Footer'

export const BasicLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html>
            <body>
                <Layout>
                    <Header />
                    {children}
                    <Footer />
                </Layout>
            </body>
        </html>
    )
}
