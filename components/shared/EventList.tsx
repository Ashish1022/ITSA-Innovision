"use client"

import React from 'react'
import EventCard from './EventCard'
import { useQuery } from 'convex/react'
import { api } from '@/convex/_generated/api'

const EventList = () => {

    const eventsData = useQuery(api.events.getAllEvents)

    return (

        <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-3 pb-10 max-md:mx-6 mx-12">
            {eventsData?.map(({ _id, eventTitle, eventDescription, imageUrl }) => (
                <EventCard
                    eventId={_id}
                    title={eventTitle}
                    description={eventDescription}
                    imageUrl={imageUrl}
                />
            ))}
        </div>

    )
}

export default EventList