'use client'
import { Layout } from 'antd'
import dynamic from 'next/dynamic'
const { Header } = Layout
const Index = () => {
    return (
        <div className="w-[1920px] h-[60px] px-[360px] bg-zinc-100 justify-center items-center gap-2.5 inline-flex">
            <div className="grow shrink basis-0 h-[22px] justify-start items-center gap-[50px] flex">
                <div className="text-zinc-800 text-sm font-bold font-['Noto Sans CJK KR'] leading-snug">[학습안내]</div>
                <div>
                    <span className="text-zinc-600 text-sm font-medium font-['Noto Sans CJK KR'] leading-snug">
                        과정학습 :{' '}
                    </span>
                    <span className="text-zinc-600 text-sm font-medium font-['Roboto'] leading-snug">
                        2024.01.01 ~ 2024.12.31
                    </span>
                </div>
                <div>
                    <span className="text-zinc-600 text-sm font-medium font-['Noto Sans CJK KR'] leading-snug">
                        평가제출 :{' '}
                    </span>
                    <span className="text-zinc-600 text-sm font-medium font-['Roboto'] leading-snug">
                        2024.01.01 ~ 2024.12.31
                    </span>
                </div>
                <div className="text-zinc-600 text-sm font-medium font-['Noto Sans CJK KR'] leading-snug">
                    수료기준 : 과정 학습 후 평가 기준 준수
                </div>
            </div>
            <div className="w-6 h-6 relative">
                <div className="w-6 h-6 left-0 top-0 absolute" />
                <img className="w-4 h-4 left-[4px] top-[4px] absolute" src="https://via.placeholder.com/16x16" />
            </div>
        </div>
    )
}
export default Index
