import {useState, useEffect, useRef} from 'react'
import {MagnifyingGlassIcon} from '@heroicons/react/24/outline'
import Destination from './Destination'
import ShowCheckout from './ShowCheckout'
import ShowCheckIn from './ShowCheckIn'
import ShowGuest from './ShowGuest'

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

      <ShowCheckout 
        checkout={checkout}
        onHandleCheckout={onHandleCheckout}
        showCheckout={showCheckout}
        setShowCheckout={setShowCheckout}
      />

      <ShowGuest
        guest={guest}
        onHandleGuest={onHandleGuest}
        showGuest={showGuest}
        setShowGuest={setShowGuest}
      />

      <div className="flex flex-row items-center gap-3 bg-red-600 text-white p-4 rounded-full">
        <MagnifyingGlassIcon className="h-8 w-8" />
        {/* Search */}
      </div>
    </div>
  );
}

export default PageNav
