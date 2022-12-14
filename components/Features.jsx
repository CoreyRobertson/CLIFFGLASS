import React from 'react'
import { GiDiamondHard } from 'react-icons/gi'
import { MdOutlineWaves, MdBorderStyle } from 'react-icons/md'
import { SiStylelint } from 'react-icons/si'

const Features = () => {
    return (
        <div class="container mx-auto my-20" id='Features'>
            <div class="flex flex-wrap items-center">
                <div class="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-78">
                    <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-slate-500">
                        <img alt="..." src="/glass3.jpg" class="w-full align-middle rounded-t-lg" />
                        <blockquote class="relative p-8 mb-4">

                            <h4 class="text-xl font-bold text-white">
                                Classic, Innovative
                            </h4>
                            <p class="text-md font-light mt-2 text-white">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
                            </p>
                        </blockquote>
                    </div>
                </div>

                <div class="w-full md:w-6/12 px-4">
                    <div class="flex flex-wrap">
                        <div class="w-full md:w-6/12 px-4">
                            <div class="relative flex flex-col mt-4">
                                <div class="px-4 py-5 flex-auto">
                                    <div class="text-slate-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                                        <i class="fas fa-sitemap"><GiDiamondHard /></i>
                                    </div>
                                    <h6 class="text-xl mb-1 font-semibold">Hardened Crystal</h6>
                                    <p class="mb-4 text-slate-500">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p>
                                </div>
                            </div>
                            <div class="relative flex flex-col min-w-0">
                                <div class="px-4 py-5 flex-auto">
                                    <div class="text-slate-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                                        <i class="fas fa-drafting-compass"><MdOutlineWaves /></i>
                                    </div>
                                    <h6 class="text-xl mb-1 font-semibold">
                                        Enhanced Taste
                                    </h6>
                                    <p class="mb-4 text-slate-500">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="w-full md:w-6/12 px-4">
                            <div class="relative flex flex-col min-w-0 mt-4">
                                <div class="px-4 py-5 flex-auto">
                                    <div class="text-slate-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                                        <i class="fas fa-newspaper"><SiStylelint /></i>
                                    </div>
                                    <h6 class="text-xl mb-1 font-semibold">Timeless Style</h6>
                                    <p class="mb-4 text-slate-500">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p>
                                </div>
                            </div>
                            <div class="relative flex flex-col min-w-0">
                                <div class="px-4 py-5 flex-auto">
                                    <div class="text-slate-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                                        <i class="fas fa-file-alt"><MdBorderStyle /></i>
                                    </div>
                                    <h6 class="text-xl mb-1 font-semibold">Lorem ipsum</h6>
                                    <p class="mb-4 text-slate-500">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features