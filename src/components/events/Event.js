import React from 'react';
import MainLayout from "../layouts/MainLayout";
import Disclose from "../partials/Disclosure";
import {useParams, Link} from "react-router-dom";
import {useQuery} from "react-query";
import {postRequest} from "../../config/axiosClient";
import GlobalLoader from "../partials/GlobalLoader";
import moment from "moment";

function Event(props) {

    const {id} = useParams()
    const { data: eventDetails, isLoading: loading } = useQuery(
        ['GetEventDetails', id],
        async () => await postRequest('/GetEventDetails', {"EventID": id}),
        { select: result => result.data.EventDetails }
    )
    const { data: similarEvents, isLoading } = useQuery(
        ['GetMoreLikeThisEventsForEvents', id],
        async () => await postRequest('/GetMoreLikeThisEventsForEvents', {"EventID": id}),
        { select: result => result.data.EventsList }
    )

    return (
        <MainLayout>
            <div className="p-4 md:p-10">
                <div className="md:px-10 relative">

                    <div className="bg-white border rounded-lg overflow-hidden">
                        {(isLoading && loading) ? <GlobalLoader/> :
                            <>
                                <div className="h-72">
                                    <img alt="banner" className="w-full h-full object-cover"
                                         src="/assets/images/LENA_WEBSITE_IMAGES/Rectangle 104.jpg"/>
                                </div>
                                <div className="p-8">
                                    <div
                                        className="flex flex-col md:flex-row flex-col-reverse justify-between items-center">
                                        <h1 className="font-medium text-xl mt-2 md:mt-0">{eventDetails?.EventName}</h1>
                                        <Link to={`/order-confirmation/${id}`}
                                              className=" w-full md:w-1/5 text-center hover:bg-blue-500 bg-primary px-20 py-1.5 rounded text-white">
                                            Book
                                        </Link>
                                    </div>
                                    <div className="flex justify-between mt-2">
                                        <div className="flex gap-x-2">
                                            {eventDetails?.EventCategories.map(category => (
                                                <p key={category.ID}
                                                   className="border border-primary px-2 py-0.5 text-sm transition duration-150 ease-in-out text-primary hover:bg-primary hover:text-white rounded-2xl ">
                                                    {category.Name}
                                                </p>

                                            ))}
                                        </div>
                                        <button className="underline text-primary text-sm">
                                            Share Event
                                        </button>
                                    </div>

                                    <p className="text-gray-700 text-sm mt-4">{eventDetails?.EventLocation}</p>

                                    <div className="mt-3">
                                        <h1 className="font-medium text-xl text-gray-900">
                                            About
                                        </h1>
                                        <p className="text-gray-700 text-sm mt-1 text-justify ">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rutrum sit
                                            amet
                                            velit
                                            nec
                                            laoreet. Morbi iaculis nulla massa, sit amet consectetur ante laoreet sit
                                            amet.
                                            Sed
                                            quis
                                            libero vulputate, volutpat elit nec, venenatis orci. Mauris eu pellentesque
                                            leo.
                                            Curabitur at placerat mauris. Quisque sed porttitor quam. Duis varius mauris
                                            non
                                            condimentum feugiat. Praesent mattis egestas augue sed facilisis. Sed
                                            lacinia
                                            facilisis
                                            lacus nec consectetur. Nunc mi enim, rhoncus porta feugiat a, bibendum eget
                                            est.
                                            Ut
                                            vitae urna fringilla purus malesuada eleifend non eu ex. Donec magna lectus,
                                            pharetra
                                            porttitor consectetur sed, dignissim in nisi.
                                        </p>
                                    </div>

                                    <Disclose title={"FAQs"}>
                                        {eventDetails?.FAQs.map(q => (
                                            <div key={q.Question}>
                                                <p className="font-semibold py-2 list-disc">{q.Question}</p>
                                                <p className="ml-3 text-sm">{q.Answer}</p>
                                            </div>
                                        ))}
                                    </Disclose>
                                    <Disclose title={"Terms and Conditions"}>
                                        {eventDetails?.TermsAndConditions.map(q => (
                                            <div key={q.Header}>
                                                <p className="font-semibold py-2">{q.Header}</p>
                                                <p className="ml-3 text-sm">{q.Context}</p>
                                            </div>
                                        ))}
                                    </Disclose>

                                    <div className="py-4">
                                        <h1 className="font-semibold mb-3">More like this</h1>
                                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-2 gap-x-8">
                                            {similarEvents?.map(event => (
                                                <div key={event.event_id} className="flex flex-col">
                                                    <div className="w-50 md:w-80 h-52 md:h-56">
                                                        <img
                                                            alt=""
                                                            src="/assets/images/LENA_WEBSITE_IMAGES/Rectangle 56.jpg"
                                                            className="mx-auto rounded-lg w-full h-full object-cover"/>
                                                    </div>

                                                    <div className="mt-2 text-sm">
                                                        <Link to={`/event/${event.event_id}`}
                                                              className="font-semibold hover:text-primary text-gray-800">{event.name}</Link>
                                                        <p className="text-gray-600 text-xs mt-1">{event.Location}</p>
                                                        <p className="text-xs mt-1">From <span
                                                            className="text-primary">{moment(event.event_date).format('MMMM Do YYYY')}</span>
                                                        </p>
                                                        <p><span
                                                            className="text-primary text-xs mt-1">{event.TicketPrice}</span> onwards
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </>
                        }
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

export default Event;