"use client"

import { Button } from '@/components/ui/button';
import { api } from '@/convex/_generated/api';
import { Id } from '@/convex/_generated/dataModel';
import { useQuery } from 'convex/react';

import React from 'react'

interface FooterProps {
    title: string;
    ownerLabel: string;
    reviews: string;
    seller: string;
    eventId: Id<"events">;
};

const Footer = ({ title, eventId }: FooterProps) => {

    const event = useQuery(api.events.getEventById, { eventId });
    const handleClick = () => {
        window.open(event?.url);
    };

    return (
        <div className="relative bg-[#acbcf7] p-3 space-y-6 ">
            <h3 className="font-bold">{title}</h3>
            {/* <p className="text-[14px] font-medium max-w-[calc(100%-20px)]">
                {title}
            </p> */}
            {/* <div className="flex gap-x-1.5 text-md font-normal">
                <Star className="font-semibold" />
                <p className="font-semibold">23</p>
                (<p className="underline">{averageReview}</p>)
            </div> */}
            <div className='flex flex-col gap-3 items-center space-y-2'>
                <div className='flex items-center gap-3'>
                    <p className="p-bold-20 rounded-full bg-green-500/10 px-5 py-2 text-green-700 border-2">
                        {event?.isFree ? 'FREE' : `Rs. ${event?.price}`}
                    </p>
                    <p className="p-medium-16 rounded-full bg-grey-500/10 px-4 py-2.5 text-white-1 border-2">
                        {event?.eventCategory}
                    </p>
                </div>
                <Button className='w-full' onClick={handleClick}>

                    Register

                </Button>
            </div>

        </div>
    )
}

export default Footer