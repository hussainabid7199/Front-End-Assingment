import React from 'react'

export default function Popularcourse(props) {


    const Star = (props) => {
        return (
            <svg fill="orange" className='mx-0 w-5' viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
                <path clip-rule="evenodd" fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"></path>
            </svg>
        );
    }


    const PopularProductCard = () => {
        return (
            <>

                <div className='bg-[#EFFCFA] mx-5 my-5' style={{ width: "23%", height: "28rem", padding: "1rem", borderRadius: ".5rem", border: ".2rem" }}>
                    <div className="inner-image relative">
                        <span className='absolute bg-[#9013fe] text-white text-xs leading-[22px] rounded ml-[15px] mt-[15px] px-[15px] py-1 left-0 top-0'>All Level</span>
                        <img src="https://demo.omexer.com/main/wp-content/uploads/sites/3/2019/05/course-11.jpg" alt="" style={{ borderRadius: ".5rem", border: ".2rem" }} />
                    </div>
                    <div className="content my-10">
                        <h3 className='text-[#FF630E] text-base font-semibold uppercase leading-[26px] tracking-[1px]'>Price</h3>
                        <h2 className='text-[#130F40] text-2xl font-bold leading-[34px] mt-1'>Product Discription</h2>
                        <div className="stars flex mt-1">
                            <Star />
                            <Star />
                            <Star />
                            <Star />
                            <Star />
                            <span className='ml-5'>13 Reviews</span>
                        </div>
                        <div className="course-length flex justify-between my-2">
                            <div className="length flex">
                                <span className='clock-icon'><svg fill="orange" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
                                    <path clip-rule="evenodd" fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z"></path>
                                </svg></span><span>02 hours 20 minutes</span>
                            </div>
                            <div className="user-bought flex">
                                <span className='user-icon'><svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
                                    <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z"></path>
                                </svg></span> <span>198</span>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }






    return (
        <>
            {/* Header Popular Courses */}
            <section className="subheader flex justify-center pt-10 pb-10 bg-[#EFFCFA]">
                <div className="container flex justify-center px-40 mx-20">
                    <div className="subheading">
                        <h4 className='text-[#FF630E] text-base font-semibold uppercase leading-[26px] tracking-[1px]'>COURSES</h4>
                        <h1 className='text-[#130F40] text-[45px] font-bold capitalize leading-[55px]'>Explore Popular Courses</h1>
                    </div>
                </div>
            </section>
            {/* Header Popular Courses*/}


            {/* PopularProduct */}
            <div className='mx-20 my-10 flex flex-wrap justify-center'>
                <PopularProductCard />
                <PopularProductCard />
                <PopularProductCard />
                <PopularProductCard />
                <PopularProductCard />
                <PopularProductCard />
            </div>
            {/* PopularProduct */}

            <div class="flex justify-center">
                <button class="text-base font-semibold uppercase leading-[26px] tracking-[1px] bg-[#FF630E] px-10 py-3.5 rounded-[30px_30px_30px_30px]">Browse All Course</button>
            </div>
        </>
    )
}
