import React from 'react'
import Dashboard from '../components/Event'
import SearchEvent from '../components/SearchEvent'
import EventList from '../components/EventList'

const Events = () => {
  return (
    <div className="mx-40">
        <Dashboard />
        <SearchEvent />
        <EventList />

    </div>
  )
}

export default Events