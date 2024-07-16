'use client'
import Card from '@/components/molecules/Card'
import { useState } from 'react'
import { NaverBookItem } from '@/interfaces/naver'

const Page = () => {
    const [query, setQuery] = useState('')
    const [books, setBooks] = useState<NaverBookItem[]>([])

    const searchBooks = async () => {
        const response = await fetch(`/api/naver/searchBooks?query=${query}`)
        const data = await response.json()
        setBooks(data.items || [])
    }
    return (
        <div>
            <h1>Search Naver Books</h1>
            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Enter book name" />
            <button onClick={searchBooks}>Search</button>
            <div>
                {books.map((book) => (
                    <Card key={book.link} image={book.image} title={book.title} description={book.description} />
                ))}
            </div>
        </div>
    )
}
export default Page
