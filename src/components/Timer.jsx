import React from 'react'

export default function Timer() {

     const Panel = ({ label, n }) => (
          <div className="panel">
               <small>{label}</small>
               <span>{n < 10 ? '0' + n : n}</span>
          </div>
     )


     const [secondsLeft, setSecondsLeft] = React.useState(86403)

     React.useEffect(() => {
          const interval = setInterval(() => {
               if (secondsLeft == 0) {
                    clearInterval(interval)
                    console.log('Times up!')
               } else {
                    setSecondsLeft(secondsLeft - 1)
               }
          }, 1000)
          return () => clearInterval(interval)
     })
     const days = Math.floor(secondsLeft / 24 / 60 / 60)
     const hoursLeft = Math.floor(secondsLeft - days * 86400)
     const hours = Math.floor(hoursLeft / 3600)
     const minutesLeft = Math.floor(hoursLeft - hours * 3600)
     const minutes = Math.floor(minutesLeft / 60)
     const seconds = secondsLeft % 60

     return (
          <>

               <div className="mx-40 my-20 flex justify-center">
                    <div className="w-full h-100 bg-[yellow] rounded-[30px_30px_30px_30px] flex justify-center">
                         <div className='mx-40 pb-20 pt-40 text-center'>
                              <h1 className='text-[#130F40] text-[45px] font-bold capitalize leading-[55px]'>Admission is open for the next batch. Take admission and get 40% discount</h1>

                              <div className='flex justify-center mt-20 mb-20'>
                                   <div className="timer flex">
                                        <span className='text-[#130F40] text-[45px] font-bold capitalize leading-[55px] mx-2 bg-white dark:bg-slate-900 p-3 rounded-[20px_20px_20px_20px]'><Panel n={days} /></span>
                                        <span className='text-[#130F40] text-[45px] font-bold capitalize leading-[55px] mx-2 bg-white dark:bg-slate-900 p-3 rounded-[20px_20px_20px_20px]'><Panel n={hours} /></span>
                                        <span className='text-[#130F40] text-[45px] font-bold capitalize leading-[55px] mx-2 bg-white dark:bg-slate-900 p-3 rounded-[20px_20px_20px_20px]'><Panel n={minutes} /></span>
                                        <span className='text-[#130F40] text-[45px] font-bold capitalize leading-[55px] mx-2 bg-white dark:bg-slate-900 p-3 rounded-[20px_20px_20px_20px]'><Panel n={seconds} /></span>
                                   </div>
                              </div>

                              <div class="flex justify-center">
                                   <button class="text-base font-semibold uppercase leading-[26px] tracking-[1px] bg-[#FF630E] px-10 py-3.5 rounded-[30px_30px_30px_30px]">Apply Now</button>
                              </div>
                         </div>
                    </div>
               </div>
          </>


     )
}




