import React from 'react'

export default function Counter(props) {


    function animateValue(obj, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            obj.innerHTML = Math.floor(progress * (end - start) + start);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }

    const obj = document.getElementById("counter");
    animateValue(obj, 0, props.value, 5000);
    return (
        <>

            <div className='px-20 text-center'>
                <div id="counter" className='text-[40px]'>{props.value + "+"}</div>
                <div className='text-[#130F40] text-2xl font-bold'>{props.uservalue}</div>
            </div>
            
        </>
    )
}
