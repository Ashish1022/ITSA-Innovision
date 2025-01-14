"use client"



import Transition from '@/components/shared/Transition';
import { Button } from '@/components/ui/button';
import { api } from '@/convex/_generated/api'
import { Id } from '@/convex/_generated/dataModel';

import { useQuery } from 'convex/react'

import Image from 'next/image';
import React from 'react'


const page = ({ params }: { params: { eventId: Id<"events"> } }) => {

  const event = useQuery(api.events.getEventById, { eventId: params.eventId });
  const handleClick = () => {
    window.open(event?.url);
  };

  return (
    <>
      <Transition />
      <section className="flex justify-center bg-[#282b30] bg-dotted-pattern bg-contain h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:max-w-7xl">
          <Image
            src={event?.imageUrl!}
            alt="hero image"
            width={1000}
            height={1000}
            className="h-full min-h-[300px] object-cover object-center"
          />
          <div className="flex w-full flex-col gap-8 p-5 md:p-10">
            <div className="flex flex-col gap-6">
              <h2 className='h2-bold text-white-1'>{event?.eventTitle}</h2>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="flex gap-3">
                  <p className="p-bold-20 rounded-full bg-green-500/10 px-5 py-2 text-green-600">
                    {event?.isFree ? 'FREE' : `Rs ${event?.price}`}
                  </p>
                  <p className="p-medium-16 rounded-full bg-grey-500/10 px-4 py-2.5 text-white-2">
                    {event?.eventCategory}
                  </p>
                </div>

                <div>
                  <p className="p-medium-18 ml-2 mt-2 sm:mt-0 text-white-1">
                    by{' '}
                    <span className='text-primary-500'>ITSA</span>
                  </p>
                </div>
              </div>

              {/* <CheckoutButton event={event} /> */}

              <div className="flex flex-col gap-5">
                <div className='flex gap-2 md:gap-3'>
                  <Image src="/assets/icons/calendar.svg" alt="calendar" width={32} height={32} />
                  <div className="p-medium-16 lg:p-regular-20 flex flex-wrap items-center">
                    <p className='w-full text-white-1'>
                      {event?.startDateTime.slice(0, 15)} - {' '}
                      {event?.startDateTime.slice(15, 21)}
                    </p>
                    <p className='text-white-1'>
                      {event?.endDateTime.slice(0, 15)} - {' '}
                      {event?.endDateTime.slice(15, 21)}
                    </p>
                  </div>
                </div>
                <div className="p-regular-20 flex items-center gap-3">
                  <Image src="/assets/icons/location.svg" alt="location" width={32} height={32} />
                  <p className="p-medium-16 lg:p-regular-20 text-white-1">{event?.location}</p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="p-medium-16 lg:p-regular-18 text-white-1">{event?.eventDescription}</p>
              </div>

              <Button className='w-full' onClick={handleClick}>

                Register

              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default page