import React from 'react';

const UpcomingEvents = ({ events }) => {
    return (
        <>
            {!events.length ? <p className="text-center p-4">No Upcoming Events</p> :
            <div className="border-t p-4">
                <h1 className="font-medium text-gray-900 text-lg">Faia Younan in Alexandria</h1>
                <p className="text-sm text-gray-600 mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                    This is upcoming</p>
            </div>}
        </>
    );
}

export default UpcomingEvents;