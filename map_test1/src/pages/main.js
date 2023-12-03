import React, { useEffect, useState } from "react";
import axios from "axios";

import Select from "./select";
import Map from './map'
import MapList from './mapList'

function Main() {
    const [festivalInfo, setFestivalInfo] = useState([]);

    function changeFestival(newFestival) {
        setFestivalInfo(newFestival); 
    }

    useEffect(() => {
        axios({
            method: 'GET',
            url: '/api/'
        })
            .then(response => {
                setFestivalInfo(response.data);
                console.log(typeof(festivalInfo));
            })
            .catch(error => {
                console.error(error);
            })
    }, []);

    return (
        <div className="festival-body">
            <h1>Main Page</h1>
            <Select selectFestival={changeFestival} />
            <Map festivalData={festivalInfo} />
            <MapList festivalData={festivalInfo} />
        </div>
    )
}

export default Main;