import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            gridTemplateColumns: {
                '13': 'repeat(13, minmax(0, 1fr))',
            },
            colors: {
                'gray-200-custom': 'var(--Gray-COLOR-gray-200, #F2F2F2)',
                blue: {
                    400: '#2589FE',
                    500: '#0070F3',
                    600: '#2F6FEB',
                },
            },
            fontFamily: {
                'noto-sans-cjk-kr': ['Noto Sans CJK KR', 'sans-serif'],
            },
            letterSpacing: {
                tightest: '-0.14px',
            },
            lineHeight: {
                tight: '22px', // You can give it a name or use a specific line height class
            },
        },
        keyframes: {
            shimmer: {
                '100%': {
                    transform: 'translateX(100%)',
                },
            },
        },
    },
    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/line-clamp')],
}
export default config
