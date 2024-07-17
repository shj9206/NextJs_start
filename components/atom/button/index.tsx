type PropsType = {
    primary?: boolean
    backgroundColor?: 'orange' | 'lime'
    size?: string
    label: string
    onClick?: () => void
    colorStrength?: '600' | '700' | '100'
}
const Button = ({
    primary = false,
    size = 'h-[50px] px-6 py-3.5 gap-2.5',
    backgroundColor = 'orange',
    colorStrength = '600',
    label,
    ...props
}: PropsType) => {
    return (
        <div className={`${size}  bg-${backgroundColor}-600 rounded-lg justify-center items-center  inline-flex`}>
            <div className="justify-start items-center gap-1 flex">
                <img src="/heart_18.svg" alt="Heart Icon" className="w-[18px] h-[18px] relative" />
                <div className="text-center text-white text-base font-bold font-['Noto Sans CJK KR'] leading-normal">
                    버튼명
                </div>
            </div>
        </div>
    )
}
export default Button
