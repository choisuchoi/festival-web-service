import React, { useEffect, useState } from "react";

import Map from './map'

import festivalData from "../data/festivalData.json" 

function Main() {
    // Json이 객체들의 배열로 구성되어 있으므로 초기 상태를 []로 설정해준다.
    const [festivalInfo, setFestivalInfo] = useState([]);

    useEffect(() => {
        // 서버에서 festival_data를 가져올 때 사용
            // axios.get("http://localhost:3000/")
            //     .then(response => {
            //         setFestivalInfo(response.data);
            //     })
            //     .catch(error => {
            //         console.error('Error fetching festival info: ', error);
            //     })

        setFestivalInfo(festivalData);
    }, [festivalData]); // festivalData가 변경될 때만 useEffect실행
    
    return (
        <div className="location">
            <h1>Main Page</h1>
            <Map festivalData={festivalInfo}/>
        </div>
    )
}

export default Main;