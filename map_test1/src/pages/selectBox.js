import React, { useState } from "react";

function SelectBox({onCityChange, onMonthChange}) {
    const city = [
        {name:'지역', value:null},
        {name:'창원시', value:'창원'},
        {name:'김해시', value:'김해'},
        {name:'진주시', value:'진주'},
        {name:'양산시', value:'양산'},
        {name:'거제시', value:'거제'},
        {name:'통영시', value:'통영'},
        {name:'사천시', value:'사천'},
        {name:'밀양시', value:'밀양'},
        {name:'함안군', value:'함안'},
        {name:'거창군', value:'거창'},
        {name:'창녕군', value:'창녕'},
        {name:'고성군', value:'고성'}
    ];
    const month = [
        {name:'개최월', value:null},
        {name:'1월', value:'1'},
        {name:'2월', value:'2'},
        {name:'3월', value:'3'},
        {name:'4월', value:'4'},
        {name:'5월', value:'5'},
        {name:'6월', value:'6'},
        {name:'7월', value:'7'},
        {name:'8월', value:'8'},
        {name:'9월', value:'9'},
        {name:'10월', value:'10'},
        {name:'11월', value:'11'},
        {name:'12월', value:'12'}
    ];

    return (
        <div>
            <select onChange={(e) => onCityChange(e.target.value)}>
                {city.map((city, index) => (
                    <option key={index} value={city.value}>{city.name}</option>
                ))}
            </select>
            <select onChange={(e) => onMonthChange(e.target.value)}>
                {month.map((month, index) => (
                    <option key={index} value={month.value}>{month.name}</option>
                ))}
            </select>
        </div>
    );
}

export default SelectBox;