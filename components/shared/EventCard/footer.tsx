import { Doc } from '@/convex/_generated/dataModel';
import { Star } from 'lucide-react';
import React from 'react'

interface FooterProps {
    title: string;
    ownerLabel: string;
    reviews: string;
    // reviews: Doc<"reviews">[] | string;
    // seller: Doc<"users">;
    seller: string;
};

const Footer = ({ title, ownerLabel, reviews, seller }: FooterProps) => {

    // let averageReview: number = reviews.length > 0 ? reviews.reduce((acc, review) => acc + review.communication_level + review.recommend_to_a_friend + review.service_as_described, 0) / (reviews.length * 3) : 0;

    let averageReview = 5;

    return (
        <div className="relative bg-white-1 p-3 space-y-2">
            <h3 className="font-bold">"ITSA Innovision"</h3>
            <p className="text-[14px] font-medium max-w-[calc(100%-20px)]">
                {title}
            </p>
            <div className="flex gap-x-1.5 text-md font-normal">
                <Star className="font-semibold" />
                <p className="font-semibold">{reviews.length}</p>
                (<p className="underline">{averageReview}</p>)
            </div>
            <p className="opacity-0 group-hover:opacity-100 transition-opacity text-[11px] text-muted-foreground truncate">
                {ownerLabel}
            </p>
        </div>
    )
}

export default Footer