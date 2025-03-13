import {Link} from 'react-router-dom'
import {GlobeAltIcon, Bars3Icon, UserCircleIcon} from '@heroicons/react/24/outline'

const Header = () => {
  return (
    <div className='p-3 flex flex-row justify-between items-center'>
      <h1 className='text-4xl text-red-500 font-bold'>airbnb</h1>

      <div className='flex flex-row gap-5 ml-8 items-center text-lg'>
        <h2>Homes</h2>
        <h2>Experiences</h2>
      </div>

      <div className='flex flex-row gap-5 ml-5 items-center text-lg'>
        <p>Airbnb your home</p>
        <Link to='#' className='h-8 w-8 text-black-500'>
          <GlobeAltIcon />
        </Link>

        <div className='flex flex-row gap-4 border p-3 rounded-full'>
          <Bars3Icon className='h-8 w-8 text-black-500' />
          <UserCircleIcon className='h-8 w-8 text-black-500' />
        </div>
      </div>
    </div>
  )
}

export default Header
