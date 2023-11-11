import React, { useEffect, useState } from 'react';
import axios from 'axios'

import MapInfo from './mapInfo'

const { kakao } = window;

function Map(props) {
    const [selectedFestival, setSelectedFestival] = useState(null);

    useEffect(() => {
        // 카카오 맵 생성
        const container = document.getElementById("map");
        const options = {
            center: new kakao.maps.LatLng(35.2383442, 128.6881997),
            level: 6
        };
        const map = new kakao.maps.Map(container, options);

        // 축제 정보 생성
        const festivalPosition = props.festivalData.map(item => ({
            title: item.id,
            latlng: new kakao.maps.LatLng(item.location.x, item.location.y),
            info: item.information
        }))

        // 카카오 맵 마커 생성
        for (let i = 0; i < festivalPosition.length; i++) {
            const marker = new kakao.maps.Marker({
                map: map,
                position: festivalPosition[i].latlng,
                title: festivalPosition[i].title,
                clickable: true
            });

            // 클릭한 축제의 id를 form형식으로 서버에게 전달
            kakao.maps.event.addListener(marker, "click", function () {
                const formData = new FormData();
                const festivalId = festivalPosition[i].title;
                formData.append("id", festivalId);
                axios.post("http://localhost:3000/get_festival", formData)
                    .then(response => {
                        console.log("Festival_id sent to server:", response.data);
                    })
                    .catch(error => {
                        console.error("Error sending data to server:", error);
                    })
            })
        }
    }, [props.festivalData]);   // props.festivalData가 변경되면 useEffect()실행

    // 지도를 그리는 javascript API는 index.html에서 불러온다.
    return (
        <div>
            <h3>Map</h3>
            <div id="map" style={{
                width: '500px',
                height: '500px'
            }}></div>
            <MapInfo />
        </div>
    );
}

export default Map;