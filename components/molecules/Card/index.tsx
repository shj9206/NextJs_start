'use client'
import React from 'react'
import { Card } from 'antd'
import Description from '@/components/atom/Description'

const { Meta } = Card

type Props = {
    title: string
    image: string
    description: string
}

const Index = (props: Readonly<Props>) => {
    const { title, image, description } = props
    return (
        <Card hoverable style={{ width: 240 }} cover={<img alt="example" src={image} />}>
            <Meta title={title} description={<Description text={description} />} />
        </Card>
    )
}

export default Index
