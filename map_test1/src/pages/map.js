import React, { useEffect, useState } from 'react';
import axios from 'axios'

import MapList from './mapList'


const { kakao } = window;

function Map(props) {

    useEffect(() => {
        // 카카오 맵 생성
        const container = document.getElementById("map");
        const options = {
            center: new kakao.maps.LatLng(35.206231, 127.861908),
            level: 12
        };
        const map = new kakao.maps.Map(container, options);

        // 마커 정보 생성
        const festivalPosition = props.festivalData.map(item => ({
            title: item.id,
            latlng: new kakao.maps.LatLng(item.location.x, item.location.y),
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
                
                axios({
                    method:'POST',
                    url:'/api/get_festival',
                    data: formData,
                }) 
                .then(response => {
                        console.log(response.data);
                })
                .catch(error => {
                        console.error(error);
                })
            })
        }
    }, [props.festivalData.length]);   // props.festivalData가 변경되면 useEffect()실행

    // 지도를 그리는 javascript API는 index.html에서 불러온다.
    return (
        <div>
            <div id="map" style={{
                width: '500px',
                height: '500px'
            }}></div>
        </div>
    );
}

export default Map;