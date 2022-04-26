import React from 'react';
import MainLayout from "../layouts/MainLayout";
import {Link} from "react-router-dom";

function OrderConfirmed(props) {
    return (
        <MainLayout>
            <div className="p-4 md:p-10">
                <div className="px-8 py-2 relative">
                    <div className="border bg-white rounded-xl p-10">
                        <h1 className="text-xl font-medium">Order Confirmed</h1>
                        <div className="py-2">
                            <table className="text-gray-700 table-auto w-full">
                                <thead>
                                <tr className="border-b text-sm font-light">
                                    <td className="px-4 py-3 text-left">Event Details</td>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td className="px-3 py-1.5">
                                        <p className="text-xs mt-2">Event ID # 1234</p>
                                        <p className="text-primary">Faia Younan in Alexandria</p>
                                        <p className="text-xs mt-2">Ethina Adia</p>
                                        <p className="text-sm font-medium mt-1.5">2nd November</p>
                                        <p className="text-sm mt-1.5">250 USD</p>
                                    </td>
                                </tr>
                                </tbody>
                            </table>

                            <div className="mt-4 text-center">
                                <Link to="/"
                                      className="mt-2 block w-full md:w-1/4 mx-auto bg-primary rounded px-8 py-1.5 text-white text-sm">
                                    Go to Home
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

export default OrderConfirmed;