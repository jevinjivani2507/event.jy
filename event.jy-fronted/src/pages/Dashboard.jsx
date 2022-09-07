import React from 'react'
import Event from '../components/Event'
import SearchEvent from '../components/SearchEvent'
import EventList from '../components/EventList'
import Blog from '../components/Blog'

import { useDispatch, useSelector } from "react-redux";
import { USER } from "../Redux/ActionTypes";

const Events = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.username.user);

  console.log(user);

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