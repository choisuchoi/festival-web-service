import React from 'react';
import { Link } from 'react-router-dom'

function MapList({ festivalData }) {

        const festivalDataArray = Object.values(festivalData);
        console.log(festivalDataArray);
    
    return (
        <div>
            <h3>축제 정보</h3>
            <div className="festival-list">
                {festivalDataArray.map((festival) => (
                    <Link key={festival.id} to={`/info/${festival.id}`} state={{festivalData: festival}}>
                        <div className="festival-item">
                            <img className='festival-list-image' src={"/" + festival.img_src}></img> <br />
                            <strong>ID:</strong> {festival.id} <br />
                            <strong>Name:</strong> {festival.name} <br />
                            <strong>Begin:</strong> {festival.begin_date} <br />
                            <strong>End:</strong> {festival.end_date} <br />
                            <strong>Location:</strong> {festival.place_n} <br /><br />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default MapList;