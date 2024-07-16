export type NaverBookItem = {
    title: string
    link: string
    image: string
    author: string
    price: string
    discount: string
    publisher: string
    pubdate: string
    isbn: string
    description: string
}

export type NaverBookResponse = {
    items: NaverBookItem[]
    total: number
    start: number
    display: number
}

export type ErrorResponse = {
    error: string
}
