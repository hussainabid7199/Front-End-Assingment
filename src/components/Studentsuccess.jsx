import React from 'react'

export default function Studentsuccess() {
    return (
        <>
            <section class="text-gray-600 body-font">
                <div class="container mx-auto flex px-20 py-24 md:flex-row flex-col items-center">
                    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <p class="mb-3 text-[#FF630E] text-base font-semibold uppercase leading-[26px] tracking-[1px]">STUDENT SUCCES</p>
                        <h2 class="text-[#130F40] text-[45px] font-bold capitalize leading-[55px]">Success Story Of My Students</h2>
                        <p class="mb-8 leading-7 font-normal not-italic text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, dolorem, at consectetur eos voluptatem eum fuga error voluptas neque, quas repudiandae non quisquam sunt beatae. Debitis dicta voluptas quae impedit.</p>
                        <div class="flex justify-center">
                            <button class="text-base font-semibold uppercase leading-[26px] tracking-[1px] bg-[#FF630E] px-10 py-3.5 rounded-[30px_30px_30px_30px]">Enroll Now</button>
                        </div>
                    </div>
                    <div className='shadow-[0px_10px_40px_0px_rgba(51,51,51,0.2)] ml-[50px] mr-0 my-0 rounded-[15px_15px_15px_15px] border-solid border-[10px_10px_10px_10px] border-white'>
                        {/* <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0"> */}
                            <img class="object-cover object-center rounded" alt="hero" src="https://demo.omexer.com/main/wp-content/uploads/sites/3/2021/10/zoom-webinar-4.jpg" />
                        {/* </div> */}
                    </div>
                </div>
            </section>
        </>
    )
}
