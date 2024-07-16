import { BasicLayout } from '@/layouts/BasicLayout'
import { SideBarLayout } from '@/layouts/SideBarLayout'
import { ContentsLayout } from '@/layouts/ContentsLayout'

export default function index({ children }: { children: React.ReactNode }) {
    return (
        <BasicLayout>
            <SideBarLayout>
                <ContentsLayout>{children}</ContentsLayout>
            </SideBarLayout>
        </BasicLayout>
    )
}
