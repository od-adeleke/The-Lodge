import {useRef, useEffect} from 'react'
import {BuildingOffice2Icon} from '@heroicons/react/24/outline'

const ShowCheckout = ({ 
  checkout, 
  onHandleCheckout, 
  showCheckout, 
  setShowCheckout 
}) => {

  const popupRef= useRef(null)

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

  return (
    <div className='border-l border-zinc-200 pl-2' ref={popupRef}>
      <p>Check out</p>
      <input 
        placeholder='Add dates' 
        className='focus:outline-none focus:border-none focus:ring-0 active:border-none'
        value={checkout} 
        onChange={e => onHandleCheckout(e.target.value)}
        onClick={()=> setShowCheckout(true)}
      />
      {showCheckout && (
        <div className='absolute flex flex-col bg-white border-none rounded-lg shadow-2xl p-5 gap-4 max-h-100 z-50'>
          <div className='grid grid-cols-3 gap-2'>
            {/* <p>Dates</p> */}
            <p>Months</p>
            <p>Dates</p>
            <p>Flexible</p>
          </div>
          <div>
            <input type='date' />
          </div>
        </div>
      )}
    </div>
  )
}

export default ShowCheckout
