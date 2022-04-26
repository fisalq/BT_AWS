import React from 'react';
import {ImSpinner8} from "react-icons/im";

function GlobalLoader(props) {
    return (
        <div className="text-primary p-12">
            <ImSpinner8 size={32} className="animate-spin mx-auto"/>
        </div>
    );
}

export default GlobalLoader;