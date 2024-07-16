import type { NextApiRequest, NextApiResponse } from 'next'
import { ErrorResponse, NaverBookResponse } from '@/interfaces/naver'

export default async function handler(req: NextApiRequest, res: NextApiResponse<NaverBookResponse | ErrorResponse>) {
    const { query } = req.query

    if (!query) {
        return res.status(400).json({ error: 'Query parameter is required' })
    }

    const clientId = process.env.NEXT_PUBLIC_NAVER_CLIENT_ID
    const clientSecret = process.env.NEXT_PUBLIC_NAVER_CLIENT_SECRET

    const apiUrl = `https://openapi.naver.com/v1/search/book.json?query=${encodeURIComponent(query as string)}`

    try {
        const response = await fetch(apiUrl, {
            headers: {
                'X-Naver-Client-Id': clientId!,
                'X-Naver-Client-Secret': clientSecret!,
            },
        })

        if (response.ok) {
            const data: NaverBookResponse = await response.json()
            res.status(200).json(data)
        } else {
            res.status(response.status).json({ error: response.statusText })
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' })
    }
}
