import React from 'react'
import Event from '../components/Event'
import SearchEvent from '../components/SearchEvent'
import EventList from '../components/EventList'

const Events = () => {
  return (
    <div className="mx-40">
        <Event />
        <SearchEvent />
        <EventList />

    </div>
  )
}

export default Events