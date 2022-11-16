import React from 'react'
import { Link } from "react-router-dom";

export function Navbar ({title}){
        return (
            <nav className='w-full shadow-sm '>
                <div className="nav-header flex justify-between items-center px-52 py-10">
                    <div className="nav-logo font-newFont text-xl w-9/12 font-bold ">{title}</div>
                    <div className="nav-icons-with-search">
                        <div className="icons flex items-center space-x-2 ">
                            <div className="facebook-icon w-10 ">
                                <svg width="17" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" fill="black" stroke="black" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>


                            </div>
                            <div className="twiter-icon w-10 ">
                                <svg width="17" height="20" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M23 1.07341C22.0424 1.66718 20.9821 2.12132 19.86 2.41833C19.2577 1.80961 18.4573 1.37817 17.567 1.18235C16.6767 0.986531 15.7395 1.03579 14.8821 1.32346C14.0247 1.61113 13.2884 2.12333 12.773 2.79079C12.2575 3.45826 11.9877 4.24877 12 5.05543V5.93446C10.2426 5.97452 8.50127 5.63191 6.93101 4.93715C5.36074 4.2424 4.01032 3.21705 3 1.95245C3 1.95245 -1 9.86374 8 13.3799C5.94053 14.6087 3.48716 15.2249 1 15.1379C10 19.5331 21 15.1379 21 5.02906C20.9991 4.78421 20.9723 4.53996 20.92 4.29946C21.9406 3.41471 22.6608 2.29765 23 1.07341Z" fill="black" stroke="black" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div className="instagram-icon w-10">
                                <svg width="17" height="20" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17 2.30458H7C4.23858 2.30458 2 4.54315 2 7.30458V17.3046C2 20.066 4.23858 22.3046 7 22.3046H17C19.7614 22.3046 22 20.066 22 17.3046V7.30458C22 4.54315 19.7614 2.30458 17 2.30458Z" stroke="black" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M16 11.6746C16.1234 12.5068 15.9813 13.3568 15.5938 14.1036C15.2063 14.8504 14.5931 15.456 13.8416 15.8342C13.0901 16.2125 12.2384 16.3442 11.4078 16.2105C10.5771 16.0768 9.80976 15.6847 9.21484 15.0897C8.61992 14.4948 8.22773 13.7274 8.09407 12.8968C7.9604 12.0661 8.09207 11.2145 8.47033 10.4629C8.84859 9.71143 9.45419 9.09832 10.201 8.71082C10.9478 8.32332 11.7978 8.18116 12.63 8.30458C13.4789 8.43046 14.2649 8.82604 14.8717 9.43288C15.4785 10.0397 15.8741 10.8257 16 11.6746Z" stroke="black" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M17.5 6.80457H17.51" stroke="black" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                            </div>
                            <div className="search ml-4 flex  items-center space-x-2">
                                <input type="text" className='rounded-full px-3 py-3 shadow-lg font-bold ' placeholder='Search...' />
                                <div className="search-icon bg-black rounded-full h-16 w-16 flex items-center justify-center cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" strokeWidth="2.5" stroke="white" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                    </svg>
                                </div>

                            </div>
                        </div>
                    </div>
                </div> <div className="nav-item ">
                    <ul className='uppercase flex flex-row space-x-10 font-newFont tracking-tighter text-[0.9rem]  text-black items-center px-52 pb-7'>
                        <li className='cursor-pointer hover:text-gray-500'><Link to="/">Home</Link></li>
                        <li className='cursor-pointer hover:text-gray-500'><Link to="/business">Business</Link></li>
                        <li className='cursor-pointer hover:text-gray-500'><Link to="/entertainment">Entertainment</Link></li>
                        <li className='cursor-pointer hover:text-gray-500'><Link to="/science">Science</Link></li>
                        <li className='cursor-pointer hover:text-gray-500'><Link to="/sports">Sports</Link></li>
                        <li className='cursor-pointer hover:text-gray-500'><Link to="/technology">technology</Link></li>
                    </ul>
                </div>
            </nav>
        )
 
}


export default Navbar