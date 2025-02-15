"use client";

import React from "react";
import { Carousel } from "antd";

export default function HeroCarousel() {
    return (

        <div className="h-[calc(100vh-8.5vh)] overflow-hidden z-10">
            <Carousel autoplay className="">
                <div className="relative h-screen w-full">

                    <img
                        src="/carousel.jpg"
                        alt="Slide 1"
                        className="absolute inset-0 object-cover w-full h-full z-10 filter opacity-30"
                    />

                   
                    <div className="absolute inset-0 flex flex-col items-center justify-center  m-10">
                        <div className="  text-center z-50 flex">
                            <h3 className="text-3xl font-medium text-gray-100">  We Handle All Your Taxes </h3><span className="inline-block bg-orange-500 text-white px-3 py-3 rounded-full shadow-lg transform hover:scale-105 transition duration-300  mb-5 font-medium align-middle items-center justify-center">BEST FINNCIAL ADVICE</span>
                        </div>

                        <button className="z-50 bg-blue-600 text-orange-50 px-6  rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300 hover:text-orange-500 ">
                            Explore More
                        </button>

                    </div>

                </div>

                {
                    <div className="relative h-screen w-full">
                        <img
                            src="/carousel.jpg"
                            alt="Slide 2"
                            className="absolute inset-0 object-cover w-full h-full z-10 filter opacity-30"
                        />
                        

                        <div className="absolute inset-0 flex flex-col items-center justify-center  m-10">
                            <div className="  text-center z-50 flex">
                                <h3 className="text-3xl font-medium text-gray-100">  Tax Consultants of Your Own </h3><span className="inline-block bg-orange-500 text-white px-3 py-3 rounded-full shadow-lg transform hover:scale-105 transition duration-300  mb-5 font-medium items-center justify-center">Elite Financial Insights</span>
                            </div>
                            
                            <button className="z-50 bg-blue-600 text-orange-50 px-6  rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300 hover:text-orange-500 ">
                                Explore More
                            </button>

                        </div>
                    </div>
                }
            </Carousel>
        </div>
    );
}
