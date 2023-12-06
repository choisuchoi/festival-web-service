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
            })
            .catch(error => {
                console.error(error);
            })
    }, []);

    return (
        <div className="festival-body">
            <img src="/image/title.jpg" width="300"></img>
            <Select selectFestival={changeFestival} />
            <Map festivalData={festivalInfo} selectFestival={changeFestival} />
            <MapList festivalData={festivalInfo} />
        </div>
    )
}

export default Main;