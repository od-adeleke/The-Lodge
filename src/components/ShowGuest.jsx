import {useRef, useEffect} from 'react'

const ShowGuest = ({guest, onHandleGuest, showGuest, setShowGuest}) => {
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
    <div className="border-l border-zinc-200 pl-2" ref={popupRef}>
      <p>Who</p>
      <input
        placeholder="Add guests"
        className="focus:outline-none focus:border-none focus:ring-0 active:border-none"
        value={guest}
        onChange={(e) => onHandleGuest(e.target.value)}
        onClick={()=> setShowGuest(true)}
      />

      {showGuest && (
        <div className='absolute flex flex-col bg-white border-none rounded-3xl shadow-2xl p-8 gap-4 z-50 top-26 right-2'>
          <div className='flex flex-cols gap-6 items-center justify-between'>
            <div className='mr-6'>
              <h3 className='font-semibold text-lg'>Adults</h3>
              <p className='text-zinc-400'>Ages 13 and above</p>
            </div>
            <div className='flex flex-cols items-center gap-4 text-xl text-zinc-400'>
              <button className='border border-zinc-400 rounded-full px-4 py-2'>-</button>
              <div>0</div>
              <button className='border rounded-full px-4 py-2'>+</button>
            </div>
          </div>

          <div className='flex flex-cols gap-6 items-center justify-between'>
            <div className='mr-6'>
              <h3 className='font-semibold text-lg'>Children</h3>
              <p className='text-zinc-400'>Ages 2 - 12</p>
            </div>
            <div className='flex flex-cols items-center gap-4'>
              <button className='border rounded-full px-4 py-2'>-</button>
              <div>0</div>
              <button className='border rounded-full px-4 py-2'>+</button>
            </div>
          </div>

          <div className='flex flex-cols gap-6 items-center justify-between'>
            <div className='mr-6'>
              <h3 className='font-semibold text-lg'>Infants</h3>
              <p className='text-zinc-400'>Under 2</p>
            </div>
            <div className='flex flex-cols items-center gap-4'>
              <button className='border rounded-full px-4 py-2'>-</button>
              <div>0</div>
              <button className='border rounded-full px-4 py-2'>+</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ShowGuest
