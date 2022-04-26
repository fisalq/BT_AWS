import React, {useEffect, useState} from 'react';
import MainLayout from "../layouts/MainLayout";
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {postRequest} from "../../config/axiosClient";
import GlobalLoader from "../partials/GlobalLoader";
import {useQuery} from "react-query";
import {showLoginModal} from "../../redux/reducers/authReducer";
import moment from "moment";

function OrderConfirmation() {
    const {eventId} = useParams()
    const {isLoggedIn} = useSelector(state => state.authReducer)
    const [tickets, setTickets] = useState([])
    const [loading, setLoading] = useState(true)

    const dispatch = useDispatch()

    const { data: eventDetails } = useQuery(
        ['GetEventDetails', eventId],
        async () => await postRequest('/GetEventDetails', { EventID: eventId }),
        { select: result => result.data.EventDetails }
    )

    useEffect(() => {
        postRequest('/GetTicketsForEvent', { EventId: eventId })
            .then(({ data }) => setTickets(data.TicketsList.map(t => ({
                            ...t,
                            quantity: 0
                        })
                    )
                )
            )
        setLoading(false)
    }, [eventId])

    const calculateTotal = () => {
        return tickets.map((t) => t.quantity * t.Price).reduce((acc, current) => acc + current, 0)
    }

    const handleChangeQuantity = (id, type) => {
        const shallowCopy = [...tickets]
        const updated = shallowCopy.map(d => {
            if (d.TicketID === id) {
                return {
                    ...d,
                    SeatsAvalible: type === 'increase' ? d.SeatsAvalible - 1 : d.quantity !== 0 ? d.SeatsAvalible + 1 : d.SeatsAvalible,
                    quantity: type === 'increase' ? d.quantity + 1 : d.quantity !== 0 ? d.quantity - 1 : 0
                }
            }
            return d
        })

        setTickets(updated)
    }

    return (
        <MainLayout>
            <div className="p-4 md:p-10">
                <div className="md:px-8 md:py-2 relative">
                    <div className="border bg-white rounded-xl p-10">
                        <h1 className="text-xl font-medium">Order Confirmation</h1>
                        <div className="py-3">
                            {loading ? <GlobalLoader/> :
                                <table className="text-gray-700 table-auto w-full">
                                    <thead>
                                        <tr className="border-b text-sm font-light">
                                            <td className="px-4 py-3 text-left">Event Name</td>
                                            <td className="px-4 py-3 text-left">Type</td>
                                            <td className="px-4 py-3 text-left">Date</td>
                                            <td className="px-4 py-3 text-left">Quantity</td>
                                            <td className="px-4 py-3 text-left">Seats Available</td>
                                            <td className="px-4 py-3 text-left">Price</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {tickets?.map((ticket, index) => (
                                        <tr key={index} className="border-b">
                                            <td className="px-3 py-2 mt-2">
                                                <p className="text-primary">{eventDetails.EventName}</p>
                                                <p className="text-xs mt-2">{eventDetails.EventLocation}</p>
                                            </td>
                                            <td className="px-3 py-2 mt-2">
                                                {ticket.TicketTypeDesc}
                                            </td>
                                            <td className="px-3 mt-2">
                                                {ticket.ListOfDaysWithDate.map(day => (
                                                    <span className="block">{moment(day).format('ddd, Do MMM YYYY')}</span>
                                                ))}
                                            </td>
                                            <td className="px-3 py-2 flex items-center ">
                                                <button
                                                    onClick={() => handleChangeQuantity(ticket.TicketID, 'decrease')}
                                                    className="border px-2 mt-1">
                                                    -
                                                </button>
                                                <span className="py-1.5 px-2 mt-1">
                                                    {ticket.quantity}
                                                </span>
                                                <button
                                                    onClick={() => handleChangeQuantity(ticket.TicketID, 'increase')}
                                                    className="border px-2 mt-1">
                                                    +
                                                </button>
                                            </td>
                                            <td className="px-3 py-2 mt-2">
                                                {ticket.SeatsAvalible}
                                            </td>
                                            <td className="px-4">{ticket.Price}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            }

                            <div className="mt-4 text-center">
                                <p className="text-lg font-medium text-gray-800">Total {calculateTotal()} USD</p>
                                {isLoggedIn ?
                                    <Link to="/order-confirmed"
                                          className="mt-3 block w-full md:w-1/4 mx-auto bg-primary rounded px-8 py-1.5 text-white text-sm">
                                        Proceed to Payment
                                    </Link> :
                                    <button className="mt-3 block w-full md:w-1/4 mx-auto bg-primary rounded px-8 py-1.5 text-white text-sm" onClick={() => dispatch(showLoginModal())} type="button">
                                        Login
                                    </button>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

export default OrderConfirmation;