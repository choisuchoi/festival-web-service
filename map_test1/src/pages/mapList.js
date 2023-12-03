import React, { useEffect } from 'react';

function MapList({ festivalData }) {

    const festivalDataArray = Object.values(festivalData);
    console.log(festivalDataArray);
    
    return (
        <div>
            <h3>축제 정보</h3>
            <ul className="festival-list">
                {festivalDataArray.map((festival, index) => (
                    <li key={index} className="festival-item">
                        <strong>ID:</strong> {festival.id} <br />
                        <strong>Name:</strong> {festival.name} <br />
                        <strong>Begin:</strong> {festival.begin_date} <br />
                        <strong>End:</strong> {festival.end_date} <br />
                        <strong>Location:</strong> {festival.place_n} <br /><br />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MapList;