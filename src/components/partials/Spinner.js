import React from "react";
import './Spinner.css';

function Spinner() {
    return (
        <div className="sticky top-2 text-primary">
            <div className="absolute right-2">
                <div className="loader ease-linear rounded-full border-2 border-t-2 border-gray-200 h-6 w-6"></div>
            </div>
        </div>
    );
}

export default Spinner;