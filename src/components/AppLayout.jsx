import {useState} from 'react'
import Header from './Header'
import PageNav from './PageNav'

const AppLayout = () => {
  const [destination, setDestination] = useState('')
  const [checkin, setCheckin] = useState('')
  const [checkout, setCheckout] = useState('')
  const [guest, setGuest] = useState('')
  
  const handleDestination= (location)=> {
    setDestination(location)
  }

  const handleCheckin= (status)=> {
    setCheckin(status)
  }

  const handleCheckout= (status)=> {
    setCheckout(status)
  }

  const handleGuest= (guests)=> {
    setGuest(guests)
  }
  return (
    <>
      <Header />
      <PageNav 
        destination={destination} 
        onHandleDestination={handleDestination} 
        checkin={checkin}
        onHandleCheckin={handleCheckin}
        checkout={checkout}
        onHandleCheckout={handleCheckout}
        guest={guest}
        onHandleGuest={handleGuest}
      />
    </>
  )
}

export default AppLayout
