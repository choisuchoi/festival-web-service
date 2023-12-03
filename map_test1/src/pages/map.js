import React, { useEffect } from 'react';
import axios from 'axios'

const { kakao } = window;

function Map({ festivalData, selectFestival }) {

    useEffect(() => {
        // 카카오 맵 생성
        const container = document.getElementById("map");
        const options = {
            center: new kakao.maps.LatLng(35.276231, 128.350000),
            level: 11
        };
        const map = new kakao.maps.Map(container, options);

        // 마커 정보 생성
        const festivalPosition = festivalData.map(item => ({
            id: item.id,
            title: item.name,
            latlng: new kakao.maps.LatLng(item.x, item.y),
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
                const festivalId = festivalPosition[i].id;
                formData.append("id", festivalId);
                
                axios({
                    method: 'POST',
                    url: '/api/get_festival',
                    data: formData,
                })
                    .then(response => {
                        selectFestival(response.data);
                    })
                    .catch(error => {
                        console.error(error);
                    })
            })
        }
    }, [festivalData.length]);   // props.festivalData가 변경되면 useEffect()실행

    // 지도를 그리는 javascript API는 index.html에서 불러온다.
    return (
        <div>
            <div id="map" style={{
                width: '700px',
                height: '500px'
            }}></div>
        </div>
    );
}

export default Map;