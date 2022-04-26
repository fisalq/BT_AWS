import React from 'react';
import UpcomingEvents from "./UpcomingEvents";
import PastEvents from "./PastEvents";
import {useQuery} from "react-query";
import {postRequest} from "../../config/axiosClient";
import {useSelector} from "react-redux";
import GlobalLoader from "../partials/GlobalLoader";

function MyEvents({setComponent}) {
    const [current, setCurrent] = React.useState('upcoming')
    const { email, __token } = useSelector(state => state.authReducer)

    const { data, isLoading } = useQuery('upcomingAndPastEvents', async () => await postRequest('/GetUpcomingAndPastEventsForUser', {Email: email, Token: __token}))

    const renderComponent = () => {
        if(current === 'upcoming') {
            return <UpcomingEvents events={data && data.data.UpcomingEventsList}  />
        } else {
            return <PastEvents events={data && data.data.PastEventsList}/>
        }
    }
    return (
        <>
            <div className="flex justify-between items-center">
                <h1>My Events</h1>
                <button onClick={() => setComponent('create')} className="bg-primary rounded text-white px-4 py-1.5 text-sm">Create Event</button>
            </div>
            <div className="px-4 sm:px-6 lg:px-20 py-4 ">
                <div className="max-w-sm mx-auto ">
                    <div>
                        <div className="sm:hidden">
                            <label htmlFor="tabs" className="sr-only">Select a tab</label>
                            <select id="tabs" name="tabs"
                                    className="block w-full bg-white border focus:ring-indigo-500 focus:outline-none p-2 focus:border-indigo-500 border-gray-300 rounded-md">

                                <option>Upcoming</option>

                                <option>Past Events</option>

                            </select>
                        </div>
                        <div className="hidden sm:block ">
                            <nav
                                className="relative z-0 border border-primary shadow flex divide-x divide-gray-200 rounded overflow-hidden"
                                aria-label="Tabs">
                                <button onClick={() => setCurrent('upcoming')}
                                    className={`group relative min-w-0 flex-1 overflow-hidden ${current === 'upcoming' ? 'bg-primary text-white': 'text-primary'} p-2 text-sm font-medium text-center hover:bg-primary hover:text-white focus:z-10`}
                                    data-todo-x-state-on="Current" data-todo-x-state-off="Default" aria-current="page"
                                    data-todo-x-state-description="Current: &quot;text-gray-900&quot;, Default: &quot;text-gray-500 hover:text-gray-700&quot;">
                                    <span>Upcoming</span>
                                </button>

                                <button onClick={() => setCurrent('past')}
                                    className={`bg-blue-50   group relative min-w-0 flex-1 ${current === 'past' ? 'bg-primary text-white': 'text-primary'} overflow-hidden bg-white p-2 text-sm font-medium text-center hover:bg-primary hover:text-white focus:z-10`}
                                    data-todo-x-state-description="undefined: &quot;text-gray-900&quot;, undefined: &quot;text-gray-500 hover:text-gray-700&quot;">
                                    <span>Past Events</span>
                                </button>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            {isLoading ? <GlobalLoader /> : renderComponent()}
        </>
    );
}

export default MyEvents;