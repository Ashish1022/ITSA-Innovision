
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { Overlay } from './overlay';
import Footer from './footer';
import { Id } from '@/convex/_generated/dataModel';
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button';

interface EventCardProps {
    eventId: Id<"events">;
    title: string;
    description: string;
    imageUrl: string;
};

const EventCard = ({ eventId, title, description, imageUrl }: EventCardProps) => {
    let i =0;
    return (
        <Link href={`/events/${eventId}`}>
            <motion.div className="group rounded-lg flex flex-col justify-between overflow-hidden border-4 border-primary-500"
             initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 1 }}
            >
                <div className="relative flex-1 bg-blue-50">
                    <Image src={imageUrl!} alt={title} width={174} height={174} className='w-full rounded-lg aspect-square 2xl:size-[200px]' />
                    <Overlay />
                </div>
                <Footer
                    title={title}
                    ownerLabel={"ITSA"}
                    reviews={"5"}
                    seller={"ITSA"}
                    eventId={eventId}
                />
                
            </motion.div>
        </Link>
    )
}

export default EventCard
