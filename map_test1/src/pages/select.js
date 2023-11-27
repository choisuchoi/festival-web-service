import React, { useEffect, useState } from "react";
import SelectBox from "./selectBox";
import SelectButton from "./selectButton";

function Select({ onFilterChange }) {
    const [selectedCity, setSelectedCity] = useState('');
    const [selectedMonth, setSelectedMonth] = useState('');

    useEffect(() => {
        onFilterChange(selectedCity, selectedMonth);
    }, [selectedCity, selectedMonth])

    function handleCityChange(city) { setSelectedCity(city); }
    function handleMonthChange(month) { setSelectedMonth(month); }
    
    return (
        <div>
            <SelectBox onCityChange={handleCityChange} onMonthChange={handleMonthChange}/>
            <SelectButton />
        </div>
    );
}

export default Select;