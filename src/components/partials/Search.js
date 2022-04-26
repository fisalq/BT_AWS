import React from 'react';

function Search({onChange, placeholder}) {

    const handleChange = (event) => {
        onChange(event.target.value)
    }

    return (
        <>
            <div className="relative rounded-sm shadow-sm">
                <input
                    autoComplete="off"
                    className="border w-full border-gray-300 bg-white h-9 px-10 pr-5 items-center rounded-md text-sm focus:border-indigo-600 focus:border-transparent focus:outline-none"
                    type="search"
                    name="search"
                    placeholder={placeholder}
                    onChange={handleChange}
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
            </div>
        </>
    );
}

export default Search;