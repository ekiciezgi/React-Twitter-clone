import React from 'react'
import {SearchIcon}from "../icons/icon"
import { Timeline } from 'react-twitter-widgets'
const Widgte = () => {
    return (
        <aside  className=" w-80" >
            <div className="flex items-center space-x-4 p-3 m-3 bg-gray-200 rounded-full text-gray-dark focus-within:bg-white  focus-within:ring-1 focus-within:ring-primary-base focus-within:text-primary-base">
                <SearchIcon className="w-5 h-5"></SearchIcon>
                <input type="text" 
                placeholder="Search twitter "
                className=" placeholder-gray-dark  bg-transparent focus:outline-none w-full text-sm "
                ></input>
            </div>
            <div>
              <div className="m-5">
              <Timeline
  dataSource={{
    sourceType: 'profile',
    screenName: 'TwitterDev'
  }}
  options={{
    height: '1000'
  }}
/>
              </div>
            </div>
        </aside>
    )
}

export default Widgte