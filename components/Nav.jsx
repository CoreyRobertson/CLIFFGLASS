import React from 'react'
import { useState } from 'react';
import Link from 'next/link';
import { GiGlassShot } from 'react-icons/gi'


const Nav = () => {
    const [navbar, setNavbar] = useState(false);
    return (
        <div>
            <nav className="w-full bg-white shadow sticky top-0">
                <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                    <div>
                        <div className="flex items-center justify-between py-3 md:py-5 md:block">

                            <a href="#">

                                <h2 className="text-2xl text-slate-500 font-bold">CLIFF GLASS</h2>
                            </a>

                            <div className="md:hidden">

                                <button
                                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-slate-500"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-slate-500"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'block' : 'hidden'
                                }`}
                        >
                            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                                <li className="text-slate-500">

                                    <a href='#About'>About Us</a>

                                </li>
                                <li className="text-slate-500">

                                    <a href='#Glass'>The Glass</a>

                                </li>
                                <li className="text-slate-500">

                                    <a href='#Features'>Features</a>

                                </li>
                                <li className="text-slate-500">

                                    <a href='#Contact'>Contact</a>

                                </li>
                                <li className="text-slate-500">

                                    <button className='"my-10 py-2 px-5  bg-slate-500 hover:bg-white hover:text-black focus:ring-slate-500 focus:ring-offset-black-200 text-white  transition ease-in duration-200 font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg duration-1000"'>Get In Touch</button>

                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>



    )
}

export default Nav