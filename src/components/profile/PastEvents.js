import React from 'react';
import moment from "moment";

function PastEvents({events}) {
    return (
        <>
            {!events.length ? <p className="">No Past Events</p> : events.map(event => (
                <div key={event.event_id} className="p-3">
                    <div className="flex justify-between items-center">
                        <p>Event ID # {event.event_id}</p>
                        <button className="bg-primary text-white text-sm rounded px-4 py-1.5">Cancel Booking</button>
                    </div>
                    <p className="text-primary font-medium text-sm">
                        {event.name}
                    </p>
                    <p className="text-gray-500 text-xs font-light mt-1.5">
                        {event.Location}
                    </p>
                    <p className="font-medium text-sm text-gray-800 mt-1.5">
                        {moment(event.event_date).format('MMM Do YYYY')}
                    </p>
                    <p className="text-xs text-gray-600 mt-1.5">
                        {event.TicketPrice} USD
                    </p>
                </div>
            ))}
        </>
    );
}

export default PastEvents;