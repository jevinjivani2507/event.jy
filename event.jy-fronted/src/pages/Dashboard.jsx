import React from 'react'
import Event from '../components/Event'
import SearchEvent from '../components/SearchEvent'
import EventList from '../components/EventList'
import Blog from '../components/Blog'

import { useDispatch, useSelector } from "react-redux";
import { USER, EVENTS } from "../Redux/ActionTypes";

import fetchEvents from '../utilities/api'
import { useEffect } from 'react'
import Cookies from "js-cookie";

const Events = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.username.user);
  const events = useSelector((state) => state.username.events);

  useEffect(() => {
    fetchEvents(dispatch);
  }, []);
  
  useEffect(() => {
    // console.log(events);
  }, [events]);
  
  

  return (
    <div className="">
        <Event />
        {/* <SearchEvent /> */}
        <EventList />
        <Blog />
    </div>
  )
}

export default Events