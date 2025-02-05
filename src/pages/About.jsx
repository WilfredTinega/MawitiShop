import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsletterBox from '../components/NewsletterBox'

function About() {
  return (
    <div>
      <div className="text-2xl text-center pt-8 boder-t">
        <Title text1={"ABOUT"} text2={"US"}/>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>Learn all about how to implement font using the API CSS code. A web font is any font used in a website’s design that isn’t installed by default on the end user’s device—a counterpart to a system font. Check out the articles below for more guidance:</p>
          <p>An eCommerce website is an online platform that facilitates the buying and selling of goods or services over the internet. It allows businesses and individuals to showcase their products, manage inventory, process payments, and handle orders seamlessly.</p>

          <b className='text-gray-800'>Our Mission</b>
          <p>design that isn’t installed by default on the end user’s device—a counterpart to a system font. Check out the articles below for more guidance:</p>
        </div>
      </div>

      <div className="text-4xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20 gap-4">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance</b>
          <p className='text-gray-600'>It allows businesses and individuals to showcase their products, manage inventory, process payments, and handle orders seamlessly.</p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience</b>
          <p className='text-gray-600'>It allows businesses and individuals to showcase their products, manage inventory, process payments, and handle orders seamlessly.</p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service</b>
          <p className='text-gray-600'>It allows businesses and individuals to showcase their products, manage inventory, process payments, and handle orders seamlessly.</p>
        </div>
      </div>

      <NewsletterBox/>
      
    </div>
  )
}

export default About
