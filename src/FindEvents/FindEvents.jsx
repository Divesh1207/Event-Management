import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import { Data } from '../Constants/Data';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const FindEvents = () => {
    const [selectedYear, setSelectedYear] = useState('');
    const [selectedMonth, setSelectedMonth] = useState('');
    const [showCard, setShowCard] = useState(false);
    const [filteredData, setFilteredData] = useState([]);
    const [eventsAvailable, setEventsAvailable] = useState(false);

    useEffect(() => {
        // Check if events are available
        const displayEvents = filteredData.length > 0;
        if (displayEvents && !eventsAvailable) {
            // Set eventsAvailable to true and show toast
            setEventsAvailable(true);
            toast("Woahhhh! You Have Something!! Check Your Events");
        }
        // if (filteredData.length === 0) {
        //     toast("No events found for the selected year and month.");
        //     return;// Stop further execution
        // }
    }, [filteredData, eventsAvailable]);

    const handleYearChange = (e) => {
        setSelectedYear(e.target.value);
        setShowCard(false); // Reset showCard when year changes
    };

    const handleMonthChange = (e) => {
        setSelectedMonth(e.target.value);
        setShowCard(false); // Reset showCard when month changes
    };
    const handleEvents = () => {
        if (selectedYear && selectedMonth) {
            console.log("Selected Year:", selectedYear);
            console.log("Selected Month:", selectedMonth);

            // Convert the full month name to an abbreviated form
            const abbreviatedMonth = selectedMonth.slice(0, 3);

            // Filter Data array based on selected year and month
            const userChoicedData = Data.filter(item =>
                item.date.year.toString() === selectedYear && item.date.month.startsWith(abbreviatedMonth)
            );
            if (userChoicedData.length === 0) {
                toast("No events found for the selected year and month.");
                return;// Stop further execution
            }
            setFilteredData(userChoicedData);
            setShowCard(true); // Show the card when events are found
        } else {
            alert('Please select a year and month');
        }
    };


    console.log("Filtered Data:", filteredData);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-100">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
                    Find Events
                </h2>
                <div className="space-y-4">
                    {/* Year Selector */}
                    <div>
                        <label htmlFor="year" className="block text-sm font-medium text-gray-700">
                            Year
                        </label>
                        <select
                            id="year"
                            value={selectedYear}
                            onChange={handleYearChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        >
                            <option value="">Select Year</option>
                            <option value="2023">2023</option>
                            <option value="2024">2024</option>
                            <option value="2025">2025</option>
                            <option value="2026">2026</option>
                            <option value="2027">2027</option>
                        </select>
                    </div>
                    {/* Month Selector */}
                    <div>
                        <label htmlFor="month" className="block text-sm font-medium text-gray-700">
                            Month
                        </label>
                        <select
                            id="month"
                            value={selectedMonth}
                            onChange={handleMonthChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        >
                            <option value="">Select Month</option>
                            <option value="January">January</option>
                            <option value="February">February</option>
                            <option value="March">March</option>
                            <option value="April">April</option>
                            <option value="May">May</option>
                            <option value="June">June</option>
                            <option value="July">July</option>
                            <option value="August">August</option>
                            <option value="September">September</option>
                            <option value="October">October</option>
                            <option value="November">November</option>
                            <option value="December">December</option>

                            {/* Other months omitted for brevity */}
                        </select>
                    </div>
                </div>
                {/* Find Events Button */}
                <div className="mt-6 flex justify-center">
                    <button
                        onClick={handleEvents}
                        className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Find Events
                    </button>
                </div>

                {/* Render the card only if showCard is true */}

                {showCard && <Card events={filteredData} />}
            </div>
        </div>
    );
};

export default FindEvents;
