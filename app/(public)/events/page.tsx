import EventList from '@/components/shared/EventList'
import Transition from '@/components/shared/Transition'
import React from 'react'


const Events = () => {
  return (
    <>
    <Transition/>
      <section className="bg-gray-100 bg-dotted-pattern bg-cover bg-center py-3 md:py-2">
        <h3 className="wrapper h3-bold text-center text-primary-500 sm:text-left">Upcoming events....</h3>
      </section>
      <div className='p-3'>
        <EventList/>
      </div>
    </>
  )
}

export default Events