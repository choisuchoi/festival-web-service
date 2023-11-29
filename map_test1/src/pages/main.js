import React, { useEffect, useState } from "react";
import axios from "axios";

import Select from "./select";
import Map from './map'
import MapList from './mapList'

function Main() {
    // Json이 객체들의 배열로 구성되어 있으므로 초기 상태를 []로 설정해준다.
    const [festivalInfo, setFestivalInfo] = useState([]);
    // const [festivalFilter, setFestivalFilter] = useState({ location: '', month: '' });

    // function changeFilter(location, month) { 
    //     setFestivalFilter({ location, month }); 
    //     console.log(festivalFilter);
    // }

    useEffect(() => {
        axios({
            method: 'get',
            url: '/api/'
        })
            .then(response => {
                setFestivalInfo(response.data);
            })
            .catch(error => {
                console.error('Error fetching initial festival info: ', error);
            })
    }, []); // filter가 변경될 때만 useEffect실행

    return (
        <div className="location">
            <h1>Main Page</h1>
            <Select festivalData={setFestivalInfo}/>
            <Map festivalData={festivalInfo} />
            <MapList festivalData={festivalInfo} />
        </div>
    )
}

export default Main;