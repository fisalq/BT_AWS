import React from 'react';
import Disclose from "../partials/Disclosure";

function LeftSide(props) {
    return (
        <div className="w-full md:w-1/5 mb-4 md:mb-0">
            <h1 className="font-semibold  text-gray-800">Filters</h1>
            <Disclose title="Date" children={
                <div>
                    <button
                        className="border border-primary px-2 py-0.5 text-sm transition duration-150 ease-in-out text-primary hover:bg-primary hover:text-white rounded-2xl ">
                        Today
                    </button>
                    <button
                        className="ml-3 border border-primary px-2 py-0.5 text-sm transition duration-150 ease-in-out text-primary hover:bg-primary hover:text-white rounded-2xl ">
                        Tomorrow
                    </button>
                    <button
                        className="mt-0 md:mt-3 ml-3 md:ml-0 border border-primary px-2 py-0.5 text-sm transition duration-150 ease-in-out text-primary hover:bg-primary hover:text-white rounded-2xl ">
                        This Weekend
                    </button>
                    <div className="flex mt-3 items-center md:justify-between">
                        <label>
                            From - To
                        </label>
                        <input type="date" className="w-36 ml-3 md:ml-0 focus:outline-none border rounded-md py-1 px-2"/>
                    </div>
                </div>
            }/>
            <Disclose title="Price" children={
                <h1>Hello</h1>
            }/>
            <Disclose title="Language" children={
                <h1>Hello</h1>
            }/>
            <Disclose title="Venue" children={
                <h1>Hello</h1>
            }/>
        </div>
    );
}

export default LeftSide;