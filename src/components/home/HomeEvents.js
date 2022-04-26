import React, { useState } from 'react';
import EventsNearYou from "./events/EventsNearYou";
import MusicEvent from "./events/MusicEvent";
import TheatreEvent from "./events/TheatreEvent";
import { useQuery } from "react-query";
import { postRequest } from "../../config/axiosClient";
import { Link } from "react-router-dom";

function HomeEvents() {
    const [component, setComponent] = useState('Kiids')

    const { data: categories } = useQuery(
        "categories",
        async () => await postRequest('/GetCategoriesForMain'),
        { select: result => result.data.CategoriesList }
    )

    const renderComponent = () => {
        switch(component) {
            case 'Kiids':
                return <EventsNearYou />
            case 'music':
                return <MusicEvent />
            case 'theatre':
                return <TheatreEvent />
            default:
                return <EventsNearYou />
        }
    }

    return (
        <div className="md:px-0 relative bg-reverse-pattern bg-no-repeat ">
            <div className="mx-auto  ">
                <div className="px-4 md:px-12">
                    <div className="sm:hidden ">
                        <label htmlFor="tabs" className="sr-only">Select a tab</label>
                        <select onChange={event => setComponent(event.target.value)}
                                className="block w-full pl-3 pr-10 py-2 bg-gray-100 border text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                            {categories?.map((cat, index) => (
                                <option key={index} value={cat.category_name}>{cat.category_name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="hidden sm:block overflow-hidden">
                        <div className="border-b border-gray-500 ">
                            <nav className="flex justify-between items-end" aria-label="Tabs">

                                <div className="flex -mb-px space-x-8">
                                    {categories?.map((cat, index) => (
                                        <button key={index} onClick={() => setComponent(cat.category_name)}
                                                className={`px-3 border-transparent ${component === cat.category_name && 'border-primary text-primary bg-blue-200'}  text-gray-700 hover:text-gray-500 hover:border-primary whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm`}
                                                data-todo-x-state-on="Current" data-todo-x-state-off="Default"
                                                data-todo-x-state-description="Current: &quot;border-indigo-500 text-indigo-600&quot;, Default: &quot;border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300&quot;">
                                            {cat.category_name}
                                        </button>
                                    ))}

                                </div>
                                <div className="items-end  py-2">
                                    <Link to="/events" className="text-primary text-sm">
                                        View All
                                    </Link>
                                </div>
                            </nav>
                        </div>
                    </div>

                    <div className="py-2 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-y-4 gap-x-3">
                        {renderComponent()}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeEvents;