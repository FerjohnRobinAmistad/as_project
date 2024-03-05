import React from 'react'
import BrandCard from "../components/BrandCard"

export default function LandingPage() {
    return (
        <div>
            LandingPage
            <BrandCard
                title="Example Card"
                content="This is an example card component."
                imageUrl="https://example.com/image.jpg"
            />
        </div>
    )
}