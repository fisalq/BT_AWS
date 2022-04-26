import React, {useState} from 'react';
import DialogModal from "../partials/DialogModal";
import UpcomingEvents from "./UpcomingEvents";
import PastEvents from "./PastEvents";
import GlobalLoader from "../partials/GlobalLoader";
import {useSelector} from "react-redux";
import {useQuery} from "react-query";
import {postRequest} from "../../config/axiosClient";

function BookingHistory() {
    const [open, setOpen] = useState(false)
    const [deletedId, setDeletedId] = useState(null)
    const [current, setCurrent] = useState('upcoming')

    const { email, __token } = useSelector(state => state.authReducer)

    const { data, isLoading } = useQuery('upcomingAndPastEvents', async () => await postRequest('/GetUpcomingAndPastEventsForUser', {Email: email, Token: __token}))

    const cancelBooking = (confirm) => {
        if(confirm) {
            console.log(deletedId)
        }
    }

    const renderComponent = () => {
        if(current === 'upcoming') {
            return <UpcomingEvents events={data && data.data.UpcomingEventsList}  />
        } else {
            return <PastEvents events={data && data.data.PastEventsList}/>
        }
    }

    return (
        <div>
            Booking History
            <div className="px-4 sm:px-6 lg:px-20 py-4">
                <div className="max-w-sm mx-auto">
                    <div>
                        <div className="sm:hidden">
                            <label htmlFor="tabs" className="sr-only">Select a tab</label>
                            <select id="tabs" name="tabs" className="block w-full bg-white border focus:ring-indigo-500 focus:outline-none p-2 focus:border-indigo-500 border-gray-300 rounded-md">

                                <option onChange = {() => setCurrent('upcoming')}>Upcoming</option>

                                <option onChange = {() => setCurrent('past')}>Past Events</option>

                            </select>
                        </div>
                        <div className="hidden sm:block">
                            <nav className="relative z-0 border border-primary shadow flex divide-x divide-gray-200 rounded overflow-hidden" aria-label="Tabs">

                                <button onClick={() => setCurrent('upcoming')}
                                        className={`group relative min-w-0 flex-1 overflow-hidden ${current === 'upcoming' ? 'bg-primary text-white': 'text-primary'} p-2 text-sm font-medium text-center hover:bg-primary hover:text-white focus:z-10`}>
                                    <span>Upcoming</span>
                                </button>

                                <button onClick={() => setCurrent('past')}
                                        className={`bg-blue-50   group relative min-w-0 flex-1 ${current === 'past' ? 'bg-primary text-white': 'text-primary'} overflow-hidden bg-white p-2 text-sm font-medium text-center hover:bg-primary hover:text-white focus:z-10`}>
                                    <span>Past Events</span>
                                </button>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="p-1 border rounded-md bg-blue-50 mt-3">
                    <div className="  divide-y">
                        { isLoading ? <GlobalLoader /> : renderComponent() }
                    </div>
                </div>
                <DialogModal width="w-96" title="Cancel Booking" body="Do you want to cancel the booking?" open={open} setOpen={setOpen} onConfirm={cancelBooking} />
            </div>
        </div>
    );
}

export default BookingHistory;