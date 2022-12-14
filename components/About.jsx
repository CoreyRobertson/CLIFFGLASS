import React from 'react'

const About = () => {
    return (
        <div className="bg-black text-white py-20" id='About'>
            <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
                <div className="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
                    <h1 className="text-3xl md:text-5xl p-2 text-slate-500 tracking-loose">CLIFF GLASS</h1>
                    <h2 className="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">Tradition, starting now
                    </h2>
                    <p className="text-sm md:text-base text-slate-500 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                </div>
                <div className="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3  justify-center">
                    <div className="h-48 flex flex-wrap content-center">
                        <div>
                        </div>
                        <div>
                            <img className="inline-block mt-24 md:mt-0 p-0 md:p-0 " src="/glass2.jpg" /></div>
                        <div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About