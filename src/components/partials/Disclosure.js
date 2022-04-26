import { Disclosure } from '@headlessui/react'
import {BsChevronDown} from "react-icons/bs";

export default function Disclose({children, title}) {
    return (

            <div className="w-full mt-2 rounded-2xl">
                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex justify-between w-full  py-2 text-sm font-medium text-left text-gray-900 border-b focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                <span>{title}</span>
                                <BsChevronDown
                                    className={`${
                                        open ? 'transform rotate-180' : ''
                                    } w-5 h-5 text-gray-900`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                {children}
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            </div>
    )
}
