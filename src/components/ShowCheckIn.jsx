import {useRef, useEffect} from 'react'

const ShowCheckIn = ({ 
  checkin, 
  onHandleCheckin, 
  showCheckin, 
  setShowCheckin 
}) => {

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

  return (
    <div className='border-l pl-2' ref={popupRef}>
      <p>Check in</p>
      <input 
        placeholder='Add dates' 
        className='focus:outline-none focus:border-none focus:ring-0 active:border-none'
        value={checkin} 
        onChange={e => onHandleCheckin(e.target.value)}
        onClick={()=> setShowCheckin(true)}
      />
      {showCheckin && (
        <div className='absolute flex flex-col bg-white border-none rounded-lg shadow-2xl p-5 gap-4 max-h-100 z-50'>
          CHECKIN
        </div>
      )}
    </div>
  )
}

export default ShowCheckIn
