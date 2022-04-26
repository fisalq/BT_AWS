import React from 'react';
import MainLayout from "../layouts/MainLayout";
import RightSide from "./RightSide";
import LeftSide from "./LeftSide";

function Events(props) {
    return (
        <MainLayout>
            <div className="p-3 md:p-8">
                <div className="p-2 relative">
                    <div className="rounded-xl border bg-white p-8">
                        <div className="flex flex-col md:flex-row gap-x-12">
                            <LeftSide/>
                            <RightSide/>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

export default Events;