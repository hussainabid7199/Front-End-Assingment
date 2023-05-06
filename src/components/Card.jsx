import React from 'react'

export default function Card() {
    return (
        <>
                <div className="bg-white shadow-[0px_10px_30px_0px_rgba(51,51,51,0.1)] m-0 p-[30px] rounded-[10px_10px_10px_10px] flex mx-3">
                    <div className="icon">
                        <svg fill="none" stroke="orange" className='w-[5em] h-[3em] relative block' stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776"></path>
                        </svg>
                    </div>
                    <div className="text">
                        <h3 className='text-xl font-bold'>Dummy Text</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat perspiciatis accusamus culpa facere impedit totam?</p>
                    </div>
                </div>
        </>
    )
}



