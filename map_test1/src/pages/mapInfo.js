import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

function MapInfo(props) {
    const location = useLocation();
    const festivalData = location.state.festivalData;
    return(
        <div>
            <Link to={'/'}><img src="/image/title.jpg" width="200"></img></Link>
            <h1>{festivalData.name}</h1>
            <p>{festivalData.begin_date} ~ {festivalData.end_date}</p>
            <img src={festivalData.imgsrc}></img>
            <p>{festivalData.detail}</p>
        </div>
    );
}

export default MapInfo;