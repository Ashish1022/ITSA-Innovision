import EventList from '@/components/shared/EventList'
import React from 'react'


const Events = () => {
  return (
    <>
      <section className="bg-white-1 bg-dotted-pattern bg-cover bg-center py-3 md:py-2">
        <h3 className="wrapper h3-bold text-center text-primary-500 sm:text-left">Upcoming events....</h3>
      </section>
      <div>
        <EventList/>
      </div>
    </>
  )
}

export default Events