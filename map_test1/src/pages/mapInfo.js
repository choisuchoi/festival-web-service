import React, { useEffect, useState } from 'react';
import axios from 'axios'

import festivalData from "../data/festivalData.json" 

function MapInfo(props) {
    const [festivalInfo, setFestivalInfo] = useState([]);

    useEffect(() => {
        setFestivalInfo(festivalData);
    });

    return (
        <div>
            <h3>Map Info</h3>
            {/* {festivalInfo.map(item => (
                <li key={item.id}>
                    <p>ID: {item.id}</p>
                    <p>x: {item.location.x}</p>
                    <p>y: {item.location.y}</p>
                </li>
            ))}  */}


        </div>
    );
}

export default MapInfo;