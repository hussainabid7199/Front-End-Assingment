import React from 'react'
import { Searchbar } from '../partials/Subheader'
import Card from './Card'
import Aboutme from './Aboutme'
import Counter from './Counter'
import Categories from './Categories'
import Popularcourse from './Popularcourse'
import Timer from './Timer'
import Studentsuccess from './Studentsuccess'

export default function Herobanner() {


    return (
        <>
        {/* Herobanner */}
            <section class="text-gray-600 body-font px-48 herobanner-bg">
                <div class="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <p class="mb-8 mb-3 text-[#FF630E] text-base font-semibold uppercase leading-[26px] tracking-[1px]">START LEARNING FROM HOME</p>
                        <h1 class="title-font sm:text-4xl text-6xl mb-10 font-extrabold text-gray-900" style={{ fontSize: "4rem", color: "#130F40" }}>Connect With</h1>
                        <h1 class="title-font sm:text-4xl text-6xl mb-10 font-extrabold text-gray-900" style={{ fontSize: "4rem", color: "#130F40" }}>Adam &</h1>
                        <h1 class="title-font sm:text-4xl text-6xl mb-10 font-extrabold text-gray-900" style={{ fontSize: "4rem", color: "#130F40" }}>Start Learning</h1>
                        <p class="mb-8 leading-relaxed font-2xl leading-8 w-4/4">I'm Highly Experienced In Web Programming. I'm Teaching Online For About 20+ Years. I Can Help You To Improve Your Skill.</p>

                        <div class="flex justify-left w-full">
                            <div className="mx-0" style={{ width: "50%" }}>
                                <form>
                                    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                                    <div class="relative">
                                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                        </div>
                                        <input type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300  rounded-lg bg-gray-50 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500" placeholder="Search..." required />
                                        <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">Search</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="lg:max-w-lg lg:w-full h-4/5 md:w-1/2 w-5/6">
                        <img class="object-cover p-10 object-center rounded" alt="hero" src="https://demo.omexer.com/main/wp-content/uploads/sites/3/2021/10/single-instructor-1.png" />
                    </div>
                </div>
            </section>

 {/* Herobanner */}

            {/* card section */}

            <section className='cardsection flex justify-center'>
                <div className='container px-20 my-10 flex'>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </section>



            {/* card section */}



            {/* Aboutme */}
            <Aboutme/>
            {/* Aboutme */}

            {/* Counter */}

            <section class="text-gray-600 body-font">
                <div class="container mx-auto flex px-20 py-24 md:flex-row flex justify-between text-[#FF630E] text-[50px] font-bold">
                <Counter value={5010} uservalue={"Student Enroll"}/>
                <Counter value={590} uservalue={"Student Enroll"}/>
                <Counter value={290} uservalue={"Student Enroll"}/>
                </div>
            </section>

            
            {/* Counter */}

            {/* Cateogries */}
            <Categories/>

            {/* Cateogries */}


            {/* Popular Course */}
                <Popularcourse/>


            {/* Popular Course */}

            {/* Timer */}
            <Timer/>
            {/* Timer */}


            {/* Student Success */}

            <Studentsuccess/>

            {/* Student Success */}
        </>
    )
}
