import React from 'react';
import img2 from './assets/img2.png';
import Tabs from './Tabs';

function About() {
    return (
        <>
            <div className='flex flex-col items-center px-4 py-24 md:flex-row md:justify-center md:px-8 lg:px-16 bg-gradient-to-t from-[#36454f] to-black '>
                <div className='mb-6 md:mb-0 md:mr-8 w-96'>
                    <img src={img2} alt="About Me" className='w-full max-w-xs md:max-w-md lg:max-w-lg border-2 border-black rounded-3xl bg-[white] ' />
                </div>

                <div className='flex flex-col items-start md:w-1/2 -mt-26'>
                    <div className='ml-52'>
                        <h1 className='text-2xl font-extrabold mb-4 md:text-3xl lg:text-4xl text-white'>About Me</h1>
                    </div>
                    <div className='text-base text-gray-700 mb-4 text-white text-justify'>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure praesentium odio quidem numquam. Nostrum assumenda voluptatem cum expedita architecto dignissimos debitis libero animi, impedit, explicabo quae nesciunt est veniam minus itaque ex. Inventore, quod mollitia impedit iusto, perferendis doloribus minus deleniti dolores non quos nisi, ullam alias qui distinctio facilis?</p>
                    </div>
                    <Tabs />
                </div>
            </div>
        </>
    );
}

export default About;
