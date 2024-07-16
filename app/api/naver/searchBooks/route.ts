import { NextRequest, NextResponse } from 'next/server'
import { NaverBookResponse } from '@/interfaces/naver'

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get('query')

    if (!query) {
        return NextResponse.json({ error: 'Query parameter is required' }, { status: 400 })
    }

    const clientId = process.env.NEXT_PUBLIC_NAVER_CLIENT_ID
    const clientSecret = process.env.NEXT_PUBLIC_NAVER_CLIENT_SECRET

    const apiUrl = `https://openapi.naver.com/v1/search/book.json?query=${encodeURIComponent(query)}`

    try {
        const response = await fetch(apiUrl, {
            headers: {
                'X-Naver-Client-Id': clientId!,
                'X-Naver-Client-Secret': clientSecret!,
            },
        })

        if (response.ok) {
            const data: NaverBookResponse = await response.json()
            return NextResponse.json(data, { status: 200 })
        } else {
            return NextResponse.json({ error: response.statusText }, { status: response.status })
        }
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}
