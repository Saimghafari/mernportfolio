import React from 'react'
import tag from "./assets/tag.svg"
import seo from "./assets/seo.svg"
import webDevelopment from "./assets/web-Development-svgrepo-com.svg"
import Content from "./assets/web.svg"

const Services = () => {
  return (
    <>
      <div className='tt'>
        <div className="pl-44 mb-10 pt-10 text-white">
          <h1 className="font-bold text-5xl">My Services</h1>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto max-w-6xl pb-10">


          <div className="border border-gray-300 rounded-lg shadow-md p-6 bg-white hover:shadow-lg transition-shadow duration-300 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#FF4500] duration-300">
            <img src={tag} alt="Web Design" className="w-16 h-16 mb-4 " />
            <h2 className="text-2xl font-bold  mb-4">Web Design</h2>
            <p className="text-justify text-gray-600">Create stunning, user-friendly websites that are tailored to your specific needs and brand identity.</p>
          </div>


          <div className="border border-gray-300 rounded-lg shadow-md p-6 bg-white hover:shadow-lg transition-shadow duration-300 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#FF4500] duration-300">
            <img src={webDevelopment} alt="Web Development" className="w-16 h-16 mb-4 " />
            <h2 className="text-2xl font-bold  mb-4">Web Development</h2>
            <p className="text-justify text-gray-600">Develop high-quality, scalable web applications using the latest technologies and frameworks.</p>
          </div>


          <div className="border border-gray-300 rounded-lg shadow-md p-6 bg-white hover:shadow-lg transition-shadow duration-300 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#FF4500] duration-300">
            <img src={seo} alt="SEO Optimization" className="w-16 h-16 mb-4 " />
            <h2 className="text-2xl font-bold mb-4">SEO Optimization</h2>
            <p className="text-justify text-gray-600">Optimize your website to improve its visibility on search engines and attract more organic traffic.</p>
          </div>


          <div className="border border-gray-300 rounded-lg shadow-md p-6 bg-white hover:shadow-lg transition-shadow duration-300 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#FF4500] duration-300">
            <img src={Content} alt="Content Writing" className="w-16 h-16 mb-4 " />
            <h2 className="text-2xl font-bold  mb-4">Content Writing</h2>
            <p className="text-justify text-gray-600">Craft compelling content that engages your audience and enhances your brand's voice and message.</p>
          </div>



        </div>
      </div>
    </>
  )
}

export default Services
