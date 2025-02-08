import React from 'react'

const NewsletterBox = () => {

    const onSubmitHandler = (event) =>{
        event.preventDefault();
    }

  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
        <p className='text-gray-400 mt-3'>
            design that isn’t installed by default on the end user’s device—a counterpart to a system font. Check out the articles below for more guidance:
        </p>

        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3  mx-auto my-6 border pl-3'>
            <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter your email' required/>
            <button type='submit' className='bg-black text-white text-xs px-10 py-4 hover:bg-gray-950'>SUBSCRIBE</button>
        </form>
      
    </div>
  )
}

export default NewsletterBox
