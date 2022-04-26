import React, { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'

function Modal({
                   children,
                   showModal,
                   setShowModal,
                   cancelButtonRef,
                   title,
                   width,
               }) {
    return (
        <Transition.Root show={showModal} as={Fragment}>
            <Dialog
                as="div"
                static
                className="fixed z-50 inset-0 overflow-y-auto"
                initialFocus={cancelButtonRef}
                open={showModal}
                onClose={setShowModal}>
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0">
                        <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span
                        className="hidden sm:inline-block sm:align-middle sm:h-screen"
                        aria-hidden="true">
                        &#8203;
                    </span>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                        <div
                            className={`${
                                width ? width : 'w-full md:w-2/4'
                            } inline-block align-bottom bg-white text-left overflow-hidden shadow-xl  transform transition-all  sm:my-8 sm:align-middle  `}>
                            <div className="max-w-none mx-auto ">
                                <div className="bg-white overflow-hidden sm:rounded-lg sm:shadow ">
                                    <button onClick={() => setShowModal(false)} className="absolute right-4 top-3 text-gray-800">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                    {children}
                                </div>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

export default Modal
