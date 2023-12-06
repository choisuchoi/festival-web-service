import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

function MapInfo(props) {
    const location = useLocation();
    const festivalData = location.state.festivalData;
    console.log(festivalData);
    return(
        <div className='info-container'>
            <Link to={'/'}>
                    <img src="/image/home.jpg" width="40"></img>
            </Link> <br /><br />
            <div className='info-child'>
                <h1>{festivalData.name}</h1>
                <p>{festivalData.begin_date} ~ {festivalData.end_date}</p><br />
                <img className='festival-info-image' src={"/" + festivalData.img_src}></img><br /><br />
                <p>{festivalData.detail}</p>
            </div>
        </div>
    );
}

export default MapInfo;