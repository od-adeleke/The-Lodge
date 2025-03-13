import {useState, useEffect, useRef} from 'react'
import {MagnifyingGlassIcon} from '@heroicons/react/24/outline'
import Destination from './Destination'
import ShowCheckIn from './ShowCheckIn'

const PageNav = ({
  destination, 
  onHandleDestination,
  checkin,
  onHandleCheckin,
  checkout,
  onHandleCheckout,
  guest,
  onHandleGuest
}) => {
  const [showDestination, setShowDestination]= useState(false)
  const [showCheckin, setShowCheckin]= useState(false)
  const [showCheckout, setShowCheckout]= useState(false)
  const [showGuest, setShowGuest]= useState(false)

  const popupRef= useRef(null)

  useEffect(()=> {
    const handleClick= (e)=> {
      if(popupRef.current && !popupRef.current.contains(e.target)) {
        setShowCheckin(false)
      }
    }

    document.addEventListener('mousedown', handleClick)
    return ()=> {
      document.removeEventListener('mousedown', handleClick)
    }
  }, [])

  useEffect(()=> {
    const handleClick= (e)=> {
      if(popupRef.current && !popupRef.current.contains(e.target)) {
        setShowCheckout(false)
      }
    }

    document.addEventListener('mousedown', handleClick)
    return ()=> {
      document.removeEventListener('mousedown', handleClick)
    }
  }, [])

  useEffect(()=> {
    const handleClick= (e)=> {
      if(popupRef.current && !popupRef.current.contains(e.target)) {
        setShowGuest(false)
      }
    }

    document.addEventListener('mousedown', handleClick)
    return ()=> {
      document.removeEventListener('mousedown', handleClick)
    }
  }, [])

  return (
    <div className="relative flex justify-self-center p-4 rounded-full shadow-2xl">
      <Destination
        destination={destination}
        onHandleDestination={onHandleDestination}
        showDestination={showDestination}
        setShowDestination={setShowDestination}
      />

      <ShowCheckIn
        checkin={checkin}
        onHandleCheckin={onHandleCheckin}
        showCheckin={showCheckin}
        setShowCheckin={setShowCheckin}
      />

      <div className="border-l pl-2">
        <p>Check out</p>
        <input
          placeholder="Add dates"
          className="focus:outline-none focus:border-none focus:ring-0 active:border-none"
          value={checkout}
          onChange={(e) => onHandleDestination(e.target.value)}
        />
      </div>

      <div className="border-l pl-2">
        <p>Who</p>
        <input
          placeholder="Add guests"
          className="focus:outline-none focus:border-none focus:ring-0 active:border-none"
          value={guest}
          onChange={(e) => onHandleDestination(e.target.value)}
        />
      </div>
      <div className="flex flex-row items-center gap-3 bg-red-600 text-white p-4 rounded-full">
        <MagnifyingGlassIcon className="h-8 w-8" />
        {/* Search */}
      </div>
    </div>
  );
}

export default PageNav
