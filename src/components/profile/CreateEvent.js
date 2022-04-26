import React, {useState} from 'react';
import {FaChevronLeft} from 'react-icons/fa'
import DatePicker from "react-datepicker";

function CreateEvent({setComponent}) {
    const [tickets, setTickets] = useState([
        {type: '', price: '', numberOfTickets: 0}
    ])
    const [inputs, setInputs] = useState({
        name: '',
        description: '',
        faqs: '',
        terms: '',
        startDate: new Date(),
        endDate: new Date(),
    });

    const handleChange = (event, index) => {
        const values = [...tickets];
        if(event.target.value) {
            values[index][event.target.name] = event.target.value;
        }
    }

    const handleInputChange = (event) => {
        const { value, name } = event.target

        setInputs({...inputs, [name]: value})
    }

    const handleAdd = () => {
        setTickets([...tickets, {type: '', price: '', numberOfTickets: 0}])
    }

    const handleDelete = (index) => {
        const values = [...tickets]
        values.splice(index, 1)
        setTickets(values)
    }

    const handleSubmit = event => {
        event.preventDefault()

        console.log({...inputs, tickets})
    }

    return (
        <>
            <button className="flex items-center hover:text-primary text-sm px-4 py-1"
                    onClick={() => setComponent('events')}>
                <FaChevronLeft className="mr-1" size={10}/>
                My Events
            </button>

            <div>
                <h1 className="text-gray-800 font-medium text-lg text-center mt-2">Create Event</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className="font-medium text-sm font-light text-gray-700">Event Name</label>
                        <input type="text" placeholder="Enter event name"
                               onChange={handleInputChange}
                               name="name"
                               value={inputs.name}
                               className="text-sm w-full rounded-md focus:border-blue-500 focus:outline-none border py-2 px-3"/>
                    </div>
                    <div className="mt-3">
                        <label className="font-medium text-sm font-light text-gray-700">Description</label>
                        <textarea rows={4} placeholder="Enter details"
                                  value={inputs.description}
                                  name="description"
                                  onChange={handleInputChange}
                                  className="text-sm w-full rounded-md focus:border-blue-500 focus:outline-none border py-2 px-3"/>
                    </div>
                    <div className="md:flex gap-x-4 mt-2 ">
                        <div className="w-full mt-4 md:mt-0">
                            <label className="font-medium text-sm font-light text-gray-700">Ticket Type</label>
                            {tickets.map((input, index) => (
                                <div key={index} className="flex justify-between items-center gap-x-4">
                                    <select onChange={event => handleChange(event, index)} name="type" defaultChecked="vip"
                                        className="w-full mb-2 text-sm bg-white  rounded-md focus:border-blue-500 focus:outline-none border py-2 px-3">
                                        <option>Select type</option>
                                        <option value="vip">VIP</option>
                                        <option value="golden">Golden</option>
                                        <option value="silver">Silver</option>
                                    </select>
                                    <input type="text" onChange={(event) => handleChange(event, index)} name="price" placeholder="Price (One)"
                                           className="text-sm mb-2 rounded-md focus:border-blue-500 focus:outline-none border py-2 px-3"/>
                                    <input type="text" onChange={(event) => handleChange(event, index)} name="numberOfTickets" placeholder="Number of Tickets"
                                           className="text-sm mb-2 rounded-md focus:border-blue-500 focus:outline-none border py-2 px-3"/>
                                    <div className="flex gap-x-4 -mt-2 w-32">
                                        {tickets.length !== 1 && index !== 0 &&
                                        <button type="button" className="text-lg" onClick={() => handleDelete(index)}>-</button>}
                                        {tickets.length - 1 === index &&
                                        <button type="button" className="text-lg" onClick={handleAdd}>+</button>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="md:flex gap-x-4 mt-2">
                        <div className="w-full mt-4 md:mt-0">
                            <label className="font-medium text-sm font-light text-gray-700">From - To</label>
                            <div className="flex">
                                <DatePicker
                                    showTimeSelect
                                    dateFormat="MMMM d, yyyy h:mm aa"
                                    selected={
                                        inputs.startDate
                                    }
                                    onChange={date => setInputs({...inputs, startDate: date})}
                                    selectsStart
                                    className="appearance-none text-xs w-full block text-gray-700 border py-2.5 rounded-l px-4 leading-tight focus:outline-none focus:bg-white"
                                />
                                <DatePicker
                                    showTimeSelect
                                    dateFormat="MMMM d, yyyy h:mm aa"
                                    selected={
                                        inputs.endDate
                                    }
                                    onChange={date => setInputs({...inputs, endDate: date})}
                                    selectsEnd
                                    className="appearance-none text-xs w-full block text-gray-700 border-r border-b border-t rounded-r py-2.5 px-4 leading-tight focus:outline-none focus:bg-white"
                                />
                            </div>

                        </div>
                    </div>
                    <div className="mt-3">
                        <label className="font-medium text-sm font-light text-gray-700">FAQs</label>
                        <textarea
                            value={inputs.faqs}
                            onChange={handleInputChange}
                            name="faqs"
                            rows={4}
                            placeholder="Enter details"
                            className="text-sm w-full rounded-md focus:border-blue-500 focus:outline-none border py-2 px-3"
                        />
                    </div>
                    <div className="mt-3">
                        <label className="font-medium text-sm font-light text-gray-700">Terms and Conditions</label>
                        <textarea
                            value={inputs.terms}
                            onChange={handleInputChange}
                            name="terms"
                            rows={4}
                            placeholder="Enter details"
                            className="text-sm w-full rounded-md focus:border-blue-500 focus:outline-none border py-2 px-3"
                        />
                    </div>
                    <div className="md:text-center mt-5 flex gap-x-4">
                        <button className="bg-primary w-2/3 py-2 text-sm text-white rounded">Create Event</button>
                        <button className="bg-gray-100 px-4 py-2 text-gray-800 rounded text-sm">Cancel</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default CreateEvent;