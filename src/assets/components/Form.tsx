import React from 'react'

export const Form: React.FC = () => {
  return (
    <div className='text-xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>
      <label className="px-2">Your favorite game</label>
      <input type='text' placeholder='Your game' className='rounded-xl ' />
      <label className="px-2">Your hobbit that happiness your makeday</label>
      <input type='text' placeholder='Your game' className='rounded-xl ' />
    </div>
  )
}
