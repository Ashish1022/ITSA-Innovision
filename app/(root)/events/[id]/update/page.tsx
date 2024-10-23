import EventForm from '@/components/shared/EventForm'
import { currentUser } from '@clerk/nextjs/server';
import React from 'react'

const UpdateEvent = async() => {

  const user = await currentUser(); 
  const userId = user?.id!;

  return (
    <>
      <section className='bg-primary-50 bg-dotted-pattern bg-cover bg-center py-4 md:py-8'>
        <h3 className='wrapper h3-bold text-center sm:text-left'>Update event</h3>
      </section>
      <div className='wrapper my-8'>
        <EventForm userId={userId} type="Update"/>
      </div>
    </>
  )
}

export default UpdateEvent