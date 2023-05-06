import React from 'react'
import { NavLink, Link } from 'react-router-dom'

export default function Navbar() {

    const Brand = () => {
        return (
            <>
                <div className="brand-logo bg-white dark:bg-slate-900">
                    <img className='my-4' src="https://demo.omexer.com/main/wp-content/uploads/sites/3/2021/06/logo.png" alt="" style={{ width: "200px", height: "81" }} />
                </div>
            </>
        )
    }
    const Navlinks = () => {
        return (
            <>
                <div className='nav-links my-auto flex justify-between'>
                    <nav>
                        <ul className='flex'>
                            <li className='mx-3 font-bold text-xl text-black dark:text-slate-400'><NavLink to={"/"}>Home</NavLink></li>
                            <li className='mx-3 font-bold text-xl text-black dark:text-slate-400'><NavLink to={"/"}>Page</NavLink></li>
                            <li className='mx-3 font-bold text-xl text-black dark:text-slate-400'><NavLink to={"/"}>Course</NavLink></li>
                            <li className='mx-3 font-bold text-xl text-black dark:text-slate-400'><NavLink to={"/"}>Blog</NavLink></li>
                            <li className='mx-3 font-bold text-xl text-black dark:text-slate-400'><NavLink to={"/"}>Contact</NavLink></li>
                            <span className='mx-10 icon-weight'><i class="bi bi-cart"></i></span>
                        </ul>
                    </nav>
                </div>
            </>
        )
    }



    const Sidebar = () => {
        return (
            <>
                {/* Mobile view */}
                <header class="text-gray-600 body-font relative bg-white dark:bg-slate-900" id='mobile-nav' style={{ zIndex: "300" }}>
                    <div class="flex justify-end w-full">
                        <aside className="flex justify-end outer" onClick={navActiveBtnToggle}>
                            <div className="sideBar flex flex-col shrink-0 p-3 bg-slate-300 dark:bg-slate-700">
                                <div className="navbrand flex justify-center mt-20 mb-10">
                                    <div className="navbarInner" style={{ width: "4rem" }}>
                                        <img src="https://demo.omexer.com/main/wp-content/uploads/sites/3/2021/06/logo.png" alt="" className="brandImage" />
                                    </div>
                                </div>
                                <ul className="nav nav-pills flex-col text-center mb-auto mx-3">
                                    <li>
                                        <Button name={"Home"} />
                                    </li>
                                    <li>
                                        <Button name={"Syllabus"} />
                                    </li>
                                    <li>
                                        <Button name={"Courses"} />
                                    </li>
                                    <li>
                                        <Button name={"About"} />
                                    </li>
                                    <li>
                                        <Button name={"Contact"} />
                                    </li>
                                </ul>
                                <hr />
                                <div className="container flex justify-center mt-3">
                                    <div className="icon-social">
                                        <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                                            <Link class="text-gray-500">
                                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                                </svg>
                                            </Link>
                                            <Link class="ml-3 text-gray-500">
                                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                                </svg>
                                            </Link>
                                            <Link class="ml-3 text-gray-500">
                                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                                </svg>
                                            </Link>
                                            <Link class="ml-3 text-gray-500">
                                                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                                                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                                </svg>
                                            </Link>
                                        </span>
                                    </div>
                                </div>
                                <div className="container-fluid text-black border-top py-4 brandBottom">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-12 text-center text-md-left mb-3 mb-md-0 d-flex justify-content-center">
                                                <p className="m-0 d-flex">&copy;&nbsp;<a href="/"></a>&nbsp;<b>All Rights Reserved.</b>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </aside>

                        <div className="navigationActiveBtn flex">
                            <div className="mt-7 mr-40">
                                {/* Dark mode icon */}
                                {/* <svg fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path d="M10 2a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 2zM10 15a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 15zM10 7a3 3 0 100 6 3 3 0 000-6zM15.657 5.404a.75.75 0 10-1.06-1.06l-1.061 1.06a.75.75 0 001.06 1.06l1.06-1.06zM6.464 14.596a.75.75 0 10-1.06-1.06l-1.06 1.06a.75.75 0 001.06 1.06l1.06-1.06zM18 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 0118 10zM5 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 015 10zM14.596 15.657a.75.75 0 001.06-1.06l-1.06-1.061a.75.75 0 10-1.06 1.06l1.06 1.06zM5.404 6.464a.75.75 0 001.06-1.06l-1.06-1.06a.75.75 0 10-1.061 1.06l1.06 1.06z"></path>
</svg> */}
                                <label class="relative inline-flex items-center mb-0 cursor-pointer">
                                    <input type="checkbox" value="" class="sr-only peer" onClick={handleDarkMode} />
                                    <div class="h-5 bg-gray-800 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" style={{ width: "3.2rem" }}></div>
                                </label>
                            </div>
                            <div className="navBtnIcon" onClick={navActiveBtnToggle}>
                                <div className="bar1" id="bar"></div>
                                <div className="bar2" id="bar"></div>
                                <div className="bar3" id="bar"></div>
                            </div>
                        </div>


                    </div>
                </header>
                {/* Mobile view */}

            </>
        )
    }

    const handleClick = () => {

    }

    const handleDarkMode = () => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.toggle('dark')
        }
    }


    const navActiveBtnToggle = () => {
        document.querySelector(".navBtnIcon").classList.toggle("change");
        document.querySelector(".sideBar").classList.toggle("sideBarActive");
        document.querySelector(".outer").classList.toggle("outerActive");
    }


    const navigationOnScroll = () => {
        document.querySelector(".navBtnIcon").classList.remove("change");
        document.querySelector(".sideBar").classList.remove("sideBarActive");
        document.querySelector(".outer").classList.remove("outerActive");
    }

    window.onscroll = navigationOnScroll


    return (
        <>
            <div className="navbar flex justify-between pl-10 bg-white dark:bg-slate-900">
                <Brand />
                <Sidebar />
            </div>

        </>
    )
}

const Button = (props) => {
    return (
        <>
            <div className='focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg px-5 py-2 mx-2 my-4 text-md dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 h-fit'>
                <Link className='dark:hover:bg-slate-100 hover:text-slate-200' to={"/"}>{props.name}</Link>
            </div>
        </>
    )
}
export { Button };