import React from 'react'
import EventForm from './_components/EventForm'

const CreateEvent = () => {
  return (
    <>
      <section className="bg-white-1 bg-dotted-pattern bg-cover bg-center py-3 md:py-2">
        <h3 className="wrapper h3-bold text-center text-primary-500 sm:text-left">Create Event</h3>
      </section>
      <div className='wrapper my-4'>
        <EventForm type='Create'/>
      </div>
    </>
  )
}

export default CreateEvent