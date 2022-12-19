import React from 'react';
import { loadStripe } from '@stripe/stripe-js';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);
export default function PreviewPage() {
    React.useEffect(() => {
        // Check to see if this is a redirect back from Checkout
        const query = new URLSearchParams(window.location.search);
        if (query.get('success')) {
            console.log('Order placed! You will receive an email confirmation.');
        }

        if (query.get('canceled')) {
            console.log('Order canceled -- continue to shop around and checkout when you’re ready.');
        }
    }, []);

    return (
        <div id='Glass'>

            <div className="bg-white overflow-hidden relative lg:flex lg:items-center">
                <div className="w-full py-12 px-20 sm:px-6 lg:py-16 lg:px-8 z-20c">
                    <h2 className="text-3xl text-center font-bold text-black sm:text-4xl">
                        <span className="block ">
                            Heritage in a glass
                        </span>
                    </h2>
                    <p className="text-md text-center my-4 text-slate-500">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>

                    <div className="grid place-items-center">
                        <form action="/api/checkout_sessions" method="POST" >
                            <section >
                                <button type="submit" role="link" className="my-10 py-10 px-20  bg-slate-500 hover:bg-white hover:text-black focus:ring-slate-500 focus:ring-offset-black-200 text-white  transition ease-in duration-200 font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg duration-1000 text-xl">
                                    Buy Now
                                </button>
                            </section>

                        </form>
                    </div>
                    <div className="lg:mt-0 lg:flex-shrink-0">
                        <div className="mt-12 inline-flex rounded-md shadow">

                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-4 p-8 lg:px-0">
                    <img src="/glass.jpg" className="w-1/2 rounded-lg " alt="Glass" />
                    <div>
                        <img src="/cliffs.jpg" className="object-cover h-75 w-96 mb-8 rounded-lg grayscale hover:grayscale-0 duration-1000" alt="Cliff" />
                        <img src="/cask.jpg" className="object-cover h-75 w-96 rounded-lg grayscale hover:grayscale-0 duration-1000 " alt="Cask" />
                    </div>
                </div>

            </div>

        </div>
    );
}