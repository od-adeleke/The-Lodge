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
      />

      {showGuest && (
        <div>Guest</div>
      )}
    </div>
  )
}

export default ShowGuest
