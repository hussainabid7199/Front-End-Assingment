import React from 'react'

export default function Categories() {


    {/* Products */ }
    const ProductCategories = (props) => {
        return (
            <>

                <div className="categories-inner mx-5 my-10" style={{ width: "15%" }}>
                    <div className="product-image bg-[#FFFFFF00] shadow-[0px_0px_0px_0px_rgba(51,51,51,0.1)] text-center p-0">
                        <img className='w-full mt-0 mb-[25px] mx-0 rounded-[8px_8px_8px_8px] box-border' src={props.image} alt="" />
                    </div>
                    <div className="discription">
                        <h5 className='my-3 text-2xl font-bold leading-[34px]'>{props.productName}</h5>
                        <p className='text-[#696969] text-base font-normal leading-7'>{props.numOfCourse + "Courses"}</p>
                    </div>
                </div>
            </>
        )
    }


    {/* Products */ }




    return (
        <>
            {/* Header Categories */}
            <section className="subheader flex justify-center pt-10 pb-10 bg-[#EFFCFA]">
                <div className="container flex justify-between px-40 mx-20">
                    <div className="subheading">
                        <h4 className='text-[#FF630E] text-base font-semibold uppercase leading-[26px] tracking-[1px]'>CATEOGRIES</h4>
                        <h1 className='text-[#130F40] text-[45px] font-bold capitalize leading-[55px]'>Popular Categories</h1>
                    </div>
                    <div className='subcateogries'>
                        <button className='text-base font-semibold uppercase leading-[26px] tracking-[1px] bg-[#FF630E] px-10 py-3.5 rounded-[30px_30px_30px_30px]'>
                            Browse All Cateogries
                        </button>
                    </div>
                </div>
            </section>
            {/* Header Categories */}


            {/* Product Listing */}
            <section className="product-listing bg-[#EFFCFA] pb-10">
                <div className='flex justify-center'>
                    <div className="container flex justify-center">
                        <ProductCategories image={"https://demo.omexer.com/main/wp-content/uploads/sites/3/2021/04/cat-1.jpg"}
                            productName={"Development"}
                            numOfCourse={4}
                        />

                        <ProductCategories image={"https://demo.omexer.com/main/wp-content/uploads/sites/3/2021/04/cat-1.jpg"}
                            productName={"Development"}
                            numOfCourse={4}
                        />


                        <ProductCategories image={"https://demo.omexer.com/main/wp-content/uploads/sites/3/2021/04/cat-1.jpg"}
                            productName={"Development"}
                            numOfCourse={4}
                        />


                        <ProductCategories image={"https://demo.omexer.com/main/wp-content/uploads/sites/3/2021/04/cat-1.jpg"}
                            productName={"Development"}
                            numOfCourse={4}
                        />
                    </div>
                </div>
            </section>
            {/* Product Listing */}
        </>
    )
}
