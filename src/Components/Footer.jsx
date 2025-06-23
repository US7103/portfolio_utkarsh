import React from 'react'

const Footer = () => {
  return (
    <>
      <div className=' min-h-[6rem] flex flex-col items-center justify-center w-full text-center text-white bg-black'>
        <h1 className='text-xl'>Connect With me!</h1>
        <div className='gap-6 flex flex-wrap justify-center mt-2'>
          <a href="tel:+918076569257">
            <img className='h-12 w-8 sm:h-16 sm:w-10' src="public/assets/call.svg" alt="" /> 
          </a>
          <a href="https://github.com/US7103">
            <img className='h-12 w-9 sm:h-16 sm:w-11' src="public/assets/git.svg" alt="" />
          </a>
          <a href="mailto:savarnutkarsh@gmail.com">
            <img className='h-12 w-8 sm:h-16 sm:w-10' src="public/assets/mail.svg" alt="" /> 
          </a>
          <a href="https://www.linkedin.com/in/utkarsh-savarn-6620681aa/">
            <img className='h-12 w-8 sm:h-16 sm:w-10' src="src/assets/link.svg" alt="" /> 
          </a>
        </div>
      </div>
    </>
  )
}

export default Footer

