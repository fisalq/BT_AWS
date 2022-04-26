import React from 'react';

function AuthLayout({children}) {
    return (
        <div className="min-h-screen bg-white md:flex">
            <div className="hidden md:block relative w-0 flex-1">
                <img className="absolute inset-0 h-full w-full object-cover"
                     src="/assets/images/LENA_WEBSITE_IMAGES/Rectangle 104.jpg"
                     alt="auth"/>
            </div>
            <div>
                {children}
            </div>
        </div>
    );
}

export default AuthLayout;