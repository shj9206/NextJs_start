import { BasicLayout } from '@/layouts/BasicLayout'
import { DashboardLayout } from '@/layouts/DashboardLayout'

const index = ({ children }: { children: React.ReactNode }) => {
    return (
        <BasicLayout>
            <DashboardLayout>{children}</DashboardLayout>
        </BasicLayout>
    )
}
