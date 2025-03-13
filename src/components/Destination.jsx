import { useEffect, useRef } from 'react'
import {BuildingOffice2Icon} from '@heroicons/react/24/outline'

const Destination = ({
  destination, 
  onHandleDestination, 
  showDestination, 
  setShowDestination
}) => {
  const popupRef= useRef(null)

  useEffect(()=> {
    const handleClick= (e)=> {
      if(popupRef.current && !popupRef.current.contains(e.target)) {
        setShowDestination(false)
      }
    }

    document.addEventListener('mousedown', handleClick)
    return ()=> {
      document.removeEventListener('mousedown', handleClick)
    }
  }, [])
  
  return (
    <div ref={popupRef}>
      <p>Where</p>
      <input 
        placeholder='Search destinations'
        className='focus:outline-none focus:border-none focus:ring-0 active:border-none'
        value={destination} 
        onChange={e => onHandleDestination(e.target.value)}
        onClick={()=> setShowDestination(true)}
      />
      {showDestination && (
        <div className='absolute flex flex-col bg-white border-none rounded-lg shadow-2xl p-5 gap-4 max-h-100 z-50'>
          <p>Suggested destination</p>
          <div className='flex flex-row gap-4'>
            <BuildingOffice2Icon className='w-8 h-8' />
            <div>
              <h2 className='font-bold'>London, United Kingdom</h2>
              <p>For sights like Buckingham Palace</p>
            </div>
          </div>

          <div className='flex flex-row gap-4'>
            <BuildingOffice2Icon className='w-8 h-8' />
            <div>
              <h2 className='font-bold'>London, United Kingdom</h2>
              <p>For sights like Buckingham Palace</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Destination
